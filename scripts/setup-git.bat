@echo off
chcp 65001 >nul

echo 🚀 初始化 Name-UI Git 提交规范...

REM 检查是否在 Git 仓库中
if not exist ".git" (
    echo ❌ 错误：当前目录不是 Git 仓库
    exit /b 1
)

REM 创建 .husky 目录（如果不存在）
if not exist ".husky" (
    mkdir .husky
    echo 📁 创建 .husky 目录
)

echo ✅ Git hooks 设置完成

REM 检查 Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：未找到 Node.js，请先安装 Node.js
    exit /b 1
)

REM 检查 pnpm
pnpm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：未找到 pnpm，请先安装 pnpm
    exit /b 1
)

echo ✅ Node.js 和 pnpm 检查通过

REM 提示安装依赖（如果需要）
if not exist "node_modules" (
    echo 📦 安装依赖...
    pnpm install
)

echo.
echo 🎉 Git 提交规范配置完成！
echo.
echo 📋 使用指南：
echo   1. 交互式提交：npm run commit
echo   2. 手动提交：git commit -m "feat: 添加新功能"
echo   3. 查看规范：type GIT_COMMIT_QUICK_GUIDE.md
echo.
echo 🔧 相关命令：
echo   - npm run format    # 格式化代码
echo   - npm run lint      # 检查代码
echo   - npm run lint:commit # 验证提交信息
echo.
echo 📖 详细文档：docs\GIT_COMMIT_GUIDE.md

pause