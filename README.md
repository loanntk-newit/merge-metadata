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

![Screenshot 2023-07-09 at 18 47 30](https://github.com/loanntk-newit/merge-metadata/assets/34096083/5559e3b9-6914-4444-8655-6cd3756b538d)


**Step 2:** Copy the folder need merge into the project (eg: set name is _gold_)

![Screenshot 2023-07-09 at 18 52 56](https://github.com/loanntk-newit/merge-metadata/assets/34096083/faa0cdcb-8dfd-4033-9d58-a5ee37e0573c)


**Step 3:** 
- Open VSCode
- Change value in .env file

Eg: 

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/72817e0d-b1c0-429d-bd3b-31711689f435)

**Step 4:** Run the following commands one by one
```sh
node random.js
node rename.js
node index.js
```

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/dcb0c8c5-3a6b-414b-8266-316b30a2ca59)


**Step 5:** Update folder output/images to pinata

**Step 6:** Copy CID to .env

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/1944869d-88ad-43de-9c50-aefa3b44ca28)

**Step 7:** Continue running commands
```sh
node replace.js
node metadata.js
node sortMetadata.js
```

![image](https://github.com/loanntk-newit/merge-metadata/assets/34096083/9dad25f7-9614-459d-88f6-d97fee027096)

**Step 8:** Update folder output/json to pinata

## Author

👤 **Nguyễn Thị Kim Loan**

* Github: [@loanntk-newit](https://github.com/loanntk-newit)

## Show your support

Give a ⭐️ if this project helped you!
