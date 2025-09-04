#!/usr/bin/env node

import { execSync } from 'child_process'
import { existsSync } from 'fs'
import path from 'path'

const packages = [
  { name: '@name-ui/core', dir: 'packages/core' },
  { name: '@name-ui/theme', dir: 'packages/theme' },
  { name: '@name-ui/vue', dir: 'packages/vue' },
  { name: '@name-ui/react', dir: 'packages/react' },
]

/**
 * 执行命令并输出结果
 */
function runCommand(command, cwd = process.cwd()) {
  console.log(`\n🔵 执行: ${command}`)
  try {
    const result = execSync(command, {
      cwd,
      stdio: 'inherit',
      encoding: 'utf8',
    })
    return true
  } catch (error) {
    console.error(`❌ 命令失败: ${command}`)
    console.error(error.message)
    return false
  }
}

/**
 * 检查包是否已构建
 */
function checkBuild(packageDir) {
  const distPath = path.join(packageDir, 'dist')
  return existsSync(distPath)
}

/**
 * 检查npm登录状态
 */
function checkNpmLogin() {
  try {
    // 检查是否有NPM_TOKEN环境变量
    if (process.env.NPM_TOKEN) {
      console.log('✅ 检测到NPM_TOKEN环境变量')
      return true
    }

    const result = execSync('npm whoami', { encoding: 'utf8' })
    console.log(`✅ 已登录npm，用户: ${result.trim()}`)
    return true
  } catch (error) {
    console.error('❌ 未登录npm')
    console.error('请选择以下方式之一：')
    console.error('1. 运行: npm login')
    console.error('2. 设置环境变量: set NPM_TOKEN=your_token_here')
    console.error('3. 在 .npmrc 文件中配置token')
    return false
  }
}

/**
 * 检查包是否已存在
 */
function checkPackageExists(packageName, version) {
  try {
    const result = execSync(`npm view ${packageName}@${version} version`, {
      encoding: 'utf8',
    })
    if (result.trim() === version) {
      console.log(`⚠️  ${packageName}@${version} 已存在`)
      return true
    }
  } catch (error) {
    // 包不存在或版本不存在
    console.log(`✅ ${packageName}@${version} 可以发布`)
  }
  return false
}

/**
 * 主发布函数
 */
async function publishPackages() {
  console.log('🚀 开始Name-UI包发布流程\n')

  // 1. 检查npm登录状态
  if (!checkNpmLogin()) {
    process.exit(1)
  }

  // 2. 构建所有包
  console.log('\n📦 构建所有包...')
  if (!runCommand('pnpm build')) {
    console.error('❌ 构建失败，请修复错误后重试')
    process.exit(1)
  }

  // 3. 检查构建结果
  console.log('\n🔍 检查构建结果...')
  for (const pkg of packages) {
    if (!checkBuild(pkg.dir)) {
      console.error(`❌ ${pkg.name} 未找到构建产物，请检查 ${pkg.dir}/dist`)
      process.exit(1)
    }
    console.log(`✅ ${pkg.name} 构建产物检查通过`)
  }

  // 4. 检查版本冲突
  console.log('\n🔍 检查版本冲突...')
  const packageJson = JSON.parse(
    execSync('cat package.json', { encoding: 'utf8' })
  )
  for (const pkg of packages) {
    const pkgJson = JSON.parse(
      execSync(`cat ${pkg.dir}/package.json`, { encoding: 'utf8' })
    )
    if (checkPackageExists(pkg.name, pkgJson.version)) {
      console.error(`❌ ${pkg.name}@${pkgJson.version} 已存在，请更新版本号`)
      process.exit(1)
    }
  }

  // 5. 开始发布
  console.log('\n🚀 开始发布包...')
  for (const pkg of packages) {
    console.log(`\n📦 发布 ${pkg.name}...`)

    if (!runCommand('npm publish', pkg.dir)) {
      console.error(`❌ ${pkg.name} 发布失败`)
      process.exit(1)
    }

    console.log(`✅ ${pkg.name} 发布成功`)

    // 发布间隔，避免npm服务器压力
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n🎉 所有包发布完成!')
  console.log('\n📋 发布摘要:')
  for (const pkg of packages) {
    const pkgJson = JSON.parse(
      execSync(`cat ${pkg.dir}/package.json`, { encoding: 'utf8' })
    )
    console.log(`  ✅ ${pkg.name}@${pkgJson.version}`)
  }

  console.log('\n📖 使用方法:')
  console.log('  Vue: npm install @name-ui/vue @name-ui/theme')
  console.log('  React: npm install @name-ui/react @name-ui/theme')
  console.log('\n💡 说明:')
  console.log('  - @name-ui/core 会作为依赖自动安装，用户无需手动安装')
  console.log('  - @name-ui/theme 需要单独安装来获得样式支持')
}

// 运行发布流程
publishPackages().catch(error => {
  console.error('❌ 发布失败:', error.message)
  process.exit(1)
})
