/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 提交类型必须是以下之一
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（既不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 构建系统或外部依赖项的更改
        'ci', // CI 配置文件和脚本的更改
        'update', // 更新依赖或配置
      ],
    ],
    // 提交类型不能为空
    'type-empty': [2, 'never'],
    // 提交类型必须小写
    'type-case': [2, 'always', 'lower-case'],
    // 提交描述不能为空
    'subject-empty': [2, 'never'],
    // 提交描述结尾不能有句号
    'subject-full-stop': [2, 'never', '.'],
    // 提交描述不能超过100个字符
    'subject-max-length': [2, 'always', 100],
    // 提交描述最少5个字符
    'subject-min-length': [2, 'always', 5],
    // header 最大长度
    'header-max-length': [2, 'always', 100],
    // body 每行最大长度
    'body-max-line-length': [2, 'always', 100],
    // footer 每行最大长度
    'footer-max-line-length': [2, 'always', 100],
  },
}
