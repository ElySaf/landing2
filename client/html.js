const Html = ({
  body
}) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body class="landing" >
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/bundle.js?v=COMMITHASH"></script>
    </body>
  </html>
`
}

export default Html
