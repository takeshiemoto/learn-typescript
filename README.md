# Learn TypeScript

## Get starting
### Step1 Installing dependencies 
```bash
$ npm init -y
$ npm install -D typescript ts-node nodemon
$ ./node_modules/.bin/tsc --init
```
### Step2 Change TypeScript settings
```json
{
  "compileOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```
### Step3 Nodemon settings
```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/main.ts"
}
```

### Step4 npm script settings
```json
{
  "scripts": {
    "start": "nodemon"
  }
}
```

### Step5 Run
```bash
$ npm start
```
