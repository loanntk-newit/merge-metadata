<h1 align="center">Welcome to merge metadata 👋</h1>
<p>
</p>

> A simple script to generate and merge metadata for NFTs. You can generate generic metadata or dynamic metadata using this script.

## Install

```sh
npm install
```

## Usage

**Step 1:** Copy folder _build_ to folder _temp_

![Screenshot 2023-07-09 at 18 47 30](https://github.com/loanntk-newit/merge-metadata/assets/34096083/f9ef55d5-772d-4858-822d-dc6d3cf50de8)

**Step 2:** Copy the folder need merge into the project (eg: set name is _gold_)

![Screenshot 2023-07-09 at 18 52 56](https://github.com/loanntk-newit/merge-metadata/assets/34096083/b87eec2f-67d1-4c76-875e-b6b25ccadc09)

**Step 3:** 
- Open VSCode
- Change value in .env file

Eg: 

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/f3484940-497d-4eff-94cd-55aaa880d3fd)

**Step 4:** Run the following commands one by one
```sh
node random.js
node rename.js
node index.js
```

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/534e4d2c-8072-4ef5-a69e-b431d1ac8f37)


**Step 5:** Update folder output/images to pinata

**Step 6:** Copy CID to .env

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/3caed689-6cd1-404c-bf22-f01f6e9d7228)

**Step 7:** Continue running commands
```sh
node replace.js
node metadata.js
```

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/7efb43ab-7f03-4044-b159-827270ad62c1)

**Step 8:** Update folder output/json to pinata

## Author

👤 **Nguyễn Thị Kim Loan**

* Github: [@loanntk-newit](https://github.com/loanntk-newit)

## Show your support

Give a ⭐️ if this project helped you!
