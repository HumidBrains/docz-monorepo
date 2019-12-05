# Debugging monorepo support with Docz

Run `yarn run docz dev` in the `source/` directory. You should see the

## Setup

1. Run `yarn` in the `source` folder
2. Run `yarn` in the `documentation` folder
3. Run `yarn run docz dev` in the `documentation` folder.

➡️ you should now see the errors below in your terminal:

```
 ERROR #98123  WEBPACK

Generating SSR bundle failed

Can't resolve '../../../../../../../source/src/Button' in '/Users/maxime/Code/docz-monorepo/documentation/.docz/.cache/caches/gatsby-plugin-mdx/mdx-scopes-dir'

File: .cache/caches/gatsby-plugin-mdx/mdx-scopes-dir/049a239130db62be40d44f60627af4dd.js


 ERROR #98123  WEBPACK

Generating SSR bundle failed

Can't resolve '@emotion/core' in '/Users/maxime/Code/docz-monorepo/source/src'

File: ../../source/src/Button.jsx

```

## Folder structure

```
docz-monorepo
├── README.md
├── source
│   ├── src
│   │   └── Button.jsx
│   └── package.json
└── documentation
    ├── test.mdx
    └── package.json
```
