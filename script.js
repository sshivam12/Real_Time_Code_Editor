function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    // Access the iframe document
    let iframeDoc = output.contentDocument || output.contentWindow.document;

    // Write the complete HTML, including CSS and JS, to the iframe
    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `);
    iframeDoc.close();
}
