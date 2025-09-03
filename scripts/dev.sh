#!/bin/bash

# Name-UI 开发工具脚本

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 显示帮助信息
show_help() {
    echo -e "${BLUE}Name-UI 开发工具${NC}"
    echo ""
    echo "用法: ./scripts/dev.sh [命令]"
    echo ""
    echo "命令:"
    echo "  setup     - 初始化项目依赖"
    echo "  dev       - 启动开发模式"
    echo "  build     - 构建所有包"
    echo "  test      - 运行测试"
    echo "  lint      - 代码检查"
    echo "  clean     - 清理构建产物"
    echo "  release   - 发布新版本"
    echo "  example   - 运行示例项目"
    echo ""
}

# 初始化项目
setup() {
    echo -e "${BLUE}正在初始化项目...${NC}"
    
    # 检查 pnpm 是否安装
    if ! command -v pnpm &> /dev/null; then
        echo -e "${RED}错误: 请先安装 pnpm${NC}"
        echo "npm install -g pnpm"
        exit 1
    fi
    
    # 安装依赖
    echo -e "${YELLOW}安装依赖...${NC}"
    pnpm install
    
    echo -e "${GREEN}项目初始化完成!${NC}"
}

# 开发模式
dev() {
    echo -e "${BLUE}启动开发模式...${NC}"
    pnpm dev
}

# 构建所有包
build() {
    echo -e "${BLUE}构建所有包...${NC}"
    pnpm build
    echo -e "${GREEN}构建完成!${NC}"
}

# 运行测试
test() {
    echo -e "${BLUE}运行测试...${NC}"
    pnpm test
}

# 代码检查
lint() {
    echo -e "${BLUE}运行代码检查...${NC}"
    pnpm lint
    pnpm type-check
}

# 清理构建产物
clean() {
    echo -e "${BLUE}清理构建产物...${NC}"
    pnpm clean
    echo -e "${GREEN}清理完成!${NC}"
}

# 发布新版本
release() {
    echo -e "${BLUE}准备发布新版本...${NC}"
    
    # 运行测试
    echo -e "${YELLOW}运行测试...${NC}"
    pnpm test
    
    # 代码检查
    echo -e "${YELLOW}代码检查...${NC}"
    pnpm lint
    
    # 构建
    echo -e "${YELLOW}构建项目...${NC}"
    pnpm build
    
    # 发布
    echo -e "${YELLOW}创建变更集...${NC}"
    pnpm changeset
    
    echo -e "${GREEN}准备就绪，可以运行 'pnpm changeset publish' 发布${NC}"
}

# 运行示例项目
example() {
    echo "选择要运行的示例项目:"
    echo "1) Vue 示例"
    echo "2) React 示例"
    read -p "请输入选择 (1-2): " choice
    
    case $choice in
        1)
            echo -e "${BLUE}启动 Vue 示例...${NC}"
            cd examples/vue-example && pnpm dev
            ;;
        2)
            echo -e "${BLUE}启动 React 示例...${NC}"
            cd examples/react-example && pnpm dev
            ;;
        *)
            echo -e "${RED}无效选择${NC}"
            ;;
    esac
}

# 主函数
main() {
    case "$1" in
        setup)
            setup
            ;;
        dev)
            dev
            ;;
        build)
            build
            ;;
        test)
            test
            ;;
        lint)
            lint
            ;;
        clean)
            clean
            ;;
        release)
            release
            ;;
        example)
            example
            ;;
        *)
            show_help
            ;;
    esac
}

# 运行主函数
main "$@"