module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: [
        '*.js',
        '*.ts', 
        '*.tsx', 
        '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ]
}