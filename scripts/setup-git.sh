#!/bin/bash

echo "🚀 初始化 Name-UI Git 提交规范..."

# 检查是否在 Git 仓库中
if [ ! -d ".git" ]; then
    echo "❌ 错误：当前目录不是 Git 仓库"
    exit 1
fi

# 创建 .husky 目录（如果不存在）
if [ ! -d ".husky" ]; then
    mkdir .husky
    echo "📁 创建 .husky 目录"
fi

# 设置 Git hooks 可执行权限
chmod +x .husky/commit-msg
chmod +x .husky/pre-commit

echo "✅ Git hooks 权限设置完成"

# 检查 Node.js 和 pnpm
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未找到 Node.js，请先安装 Node.js"
    exit 1
fi

if ! command -v pnpm &> /dev/null; then
    echo "❌ 错误：未找到 pnpm，请先安装 pnpm"
    exit 1
fi

echo "✅ Node.js 和 pnpm 检查通过"

# 提示安装依赖（如果需要）
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    pnpm install
fi

echo ""
echo "🎉 Git 提交规范配置完成！"
echo ""
echo "📋 使用指南："
echo "  1. 交互式提交：npm run commit"
echo "  2. 手动提交：git commit -m \"feat: 添加新功能\""
echo "  3. 查看规范：cat GIT_COMMIT_QUICK_GUIDE.md"
echo ""
echo "🔧 相关命令："
echo "  - npm run format    # 格式化代码"
echo "  - npm run lint      # 检查代码"
echo "  - npm run lint:commit # 验证提交信息"
echo ""
echo "📖 详细文档：docs/GIT_COMMIT_GUIDE.md"