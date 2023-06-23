# REACT 17

## No import needed

No imports needed is due to the "feature" transform-react-jsx to enable within your babel configuration

### Settup Babel

-   Install

```
# for npm users
npm update @babel/core @babel/plugin-transform-react-jsx

# for yarn users
yarn upgrade @babel/core @babel/plugin-transform-react-jsx
```

-   If using preset-react

````
# for npm users
npm update @babel/core @babel/preset-react```

```# for yarn users
yarn upgrade @babel/core @babel/preset-react```

### Enable react transform - config Babel
Babel - to create or modify babel.config.json ( recommanded )
```json
// If you're using @babel/plugin-transform-react-jsx
{
	"plugins": [
		[
			"@babel/plugin-transform-react-jsx",
			{
				"runtime": "automatic"
			}
		]
	]
}

// If you are using @babel/preset-react
{
  "presets": [
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}

````

### ESLint linting to config

If you are using eslint-plugin-react, the react/jsx-uses-react and react/react-in-jsx-scope rules are no longer necessary and can be turned off or removed.

```json
{
	// ...
	"rules": {
		// ...
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off"
	}
}
```

### Removing all unused import

Because the new JSX transform will automatically import the necessary react/jsx-runtime functions, React will no longer need to be in scope when you use JSX. This might lead to unused React imports in your code. It doesn’t hurt to keep them, but if you’d like to remove them, we recommend running a “codemod” script to remove them automatically:

```
cd your_project
npx react-codemod update-react-imports
```

---

### In CodeSandbox

in Code Sandbox specify in dependencies

-   @babel/core
-   @babel/plugin-transform-react-jsx

-   Created a babel.config.json file
-   Added the following configuration

```json
{
	"plugins": [
		[
			"@babel/plugin-transform-react-jsx",
			{
				"runtime": "automatic"
			}
		]
	]
}
```
