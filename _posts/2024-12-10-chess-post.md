---
title: Chess iframe test
date: 2024-12-10 23:09
categories: [Chess]
tags: [chess]     # TAG names should always be lowercase
description: How to embed chess boards in posts
image:
    path: /assets/img/2024-12-11/preview_arrows.png
--- 

## Using a game's id
```html
<iframe src="https://lichess.org/embed/game/MPJcy1JW?bg=auto&amp;theme=auto" style="width: 100%; aspect-ratio: 3/2;" frameborder="0"></iframe>
```
<iframe src="https://lichess.org/embed/game/MPJcy1JW?bg=auto&amp;theme=auto" style="width: 100%; aspect-ratio: 3/2;" frameborder="0"></iframe>


## Using a game's PGN
For this, we need to parse PGN to a single string. For example, (blank space) should be replaced as `%20`.
The following PGN is a game from 2024-08-17.
```
1. e3 Nf6 2. d4 g6 3. b3 Bg7 4. Bb2 O-O 5. Bd3 d5 6. Nf3 Nc6 7. c3 e6 8. Ba3 Re8
9. O-O a6 10. Nbd2 e5 11. Ne1 e4 12. Be2 h5 13. b4 b5 14. Nb3 Bf8 15. f3 Bd6 16.
f4 Bg4 17. h3 Bxe2 18. Qxe2 Ne7 19. Rf2 Kg7 20. g4 hxg4 21. hxg4 Rh8 22. g5 Nd7
23. Rh2 Nf5 24. Nc2 f6 25. Rf1 fxg5 26. Rxh8 Qxh8 27. Rf2 Ng3 28. Kg2 Nxe2 29.
Rxe2 gxf4 30. exf4 Bxf4 31. Kf1 Rf8 32. Ke1 Qh1+ 33. Kf2 Bh2+ 34. Ke3 Qf3+ 35.
Kd2 Qd3+ 0-1
```

We can use a simple converter.
<div style="margin: 20px 0;">
    <label for="inputBox" style="display: block; margin-bottom: 5px;">Enter Text:</label>
    <input type="text" id="inputBox" placeholder="Type something here..." 
        style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px;">
    <button onclick="convertText()" 
        style="width: 100%; padding: 10px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Convert
    </button>
</div>

<div id="outputBoxContainer" style="margin: 20px 0; position: relative;">
    <label for="outputBox" style="display: block; margin-bottom: 5px;">Converted Text:</label>
    <div id="outputBox" 
        style="width: 100%; min-height: 200px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9; font-family: monospace;">
    </div>
    <button id="copyButton" onclick="copyToClipboard()" 
        style="position: absolute; top: 5px; right: 5px; padding: 5px 10px; background-color: #28A745; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 12px;">
        Copy
    </button>
</div>

<script>
    function convertText() {
        const inputBox = document.getElementById("inputBox");
        const outputBox = document.getElementById("outputBox");

        // Replace blank spaces with '%20'
        const convertedText = inputBox.value.replace(/\s/g, "%20");
        outputBox.textContent = convertedText;
    }

    function copyToClipboard() {
        const outputBox = document.getElementById("outputBox");
        const copyButton = document.getElementById("copyButton");

        // Create a temporary textarea to copy the text
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = outputBox.textContent;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);

        // Change the button text to "Copied!" for a short time
        copyButton.textContent = "Copied!";
        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 2000);
    }
</script>

Then we can use the following format to embed.
```html
<!--
https://lichess.org/analysis/{PGN}
-->
<iframe src="https://lichess.org/analysis/pgn/1.%20e3%20Nf6%202.%20d4%20g6%203.%20b3%20Bg7%204.%20Bb2%20O-O%205.%20Bd3%20d5%206.%20Nf3%20Nc6%207.%20c3%20e6%208.%20Ba3%20Re8%209.%20O-O%20a6%2010.%20Nbd2%20e5%2011.%20Ne1%20e4%2012.%20Be2%20h5%2013.%20b4%20b5%2014.%20Nb3%20Bf8%2015.%20f3%20Bd6%2016.%20f4%20Bg4%2017.%20h3%20Bxe2%2018.%20Qxe2%20Ne7%2019.%20Rf2%20Kg7%2020.%20g4%20hxg4%2021.%20hxg4%20Rh8%2022.%20g5%20Nd7%2023.%20Rh2%20Nf5%2024.%20Nc2%20f6%2025.%20Rf1%20fxg5%2026.%20Rxh8%20Qxh8%2027.%20Rf2%20Ng3%2028.%20Kg2%20Nxe2%2029.%20Rxe2%20gxf4%2030.%20exf4%20Bxf4%2031.%20Kf1%20Rf8%2032.%20Ke1%20Qh1+%2033.%20Kf2%20Bh2+%2034.%20Ke3%20Qf3+%2035.%20Kd2%20Qd3+%200-1?color=black?bg=auto&amp;theme=auto" style="width:100%; aspect-ratio: 4/3" frameborder="0"></iframe>
```
<iframe src="https://lichess.org/analysis/pgn/1.%20e3%20Nf6%202.%20d4%20g6%203.%20b3%20Bg7%204.%20Bb2%20O-O%205.%20Bd3%20d5%206.%20Nf3%20Nc6%207.%20c3%20e6%208.%20Ba3%20Re8%209.%20O-O%20a6%2010.%20Nbd2%20e5%2011.%20Ne1%20e4%2012.%20Be2%20h5%2013.%20b4%20b5%2014.%20Nb3%20Bf8%2015.%20f3%20Bd6%2016.%20f4%20Bg4%2017.%20h3%20Bxe2%2018.%20Qxe2%20Ne7%2019.%20Rf2%20Kg7%2020.%20g4%20hxg4%2021.%20hxg4%20Rh8%2022.%20g5%20Nd7%2023.%20Rh2%20Nf5%2024.%20Nc2%20f6%2025.%20Rf1%20fxg5%2026.%20Rxh8%20Qxh8%2027.%20Rf2%20Ng3%2028.%20Kg2%20Nxe2%2029.%20Rxe2%20gxf4%2030.%20exf4%20Bxf4%2031.%20Kf1%20Rf8%2032.%20Ke1%20Qh1+%2033.%20Kf2%20Bh2+%2034.%20Ke3%20Qf3+%2035.%20Kd2%20Qd3+%200-1?color=black?bg=auto&amp;theme=auto" style="width:100%; aspect-ratio: 4/3" frameborder="0"></iframe>

However you may see a scrollbar dangling at the side of the board. This is because the url `/analysis` is not designed to be embedded.

An embedded version needs you to create a study and click the share button in [lichess.org](https://lichess.org).
See [this site](https://lichess.org/developers) for further details on how to create a study.

After creating a study, you will see an embed url like this.
![study-embed](/assets/img/2024-12-11/study_embed.png)

Copying it and giving some style will give a nice embedded board.
```html
<iframe src="https://lichess.org/study/embed/sAm85OVc/OGq3asWo" style="width: 100%; aspect-ratio: 3/2;" frameborder="0"></iframe>
```
<iframe src="https://lichess.org/study/embed/sAm85OVc/OGq3asWo" style="width: 100%; aspect-ratio: 3/2;" frameborder="0"></iframe>

## Embedding a puzzle

The site above gives a simple example of how to embedd "Today's Puzzle".
The board below uses `width: 600px`.

<iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 600px; aspect-ratio: 10/11;" allowtransparency="true" frameborder="0"></iframe>

> I thought this would give an interactive puzzle; but it just redirects to lichess.
{: .prompt-info }