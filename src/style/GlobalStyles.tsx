import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    
    body {
        background-color: #ffffff ;
        line-height: 1;
    }
    
    ol, ul {
        list-style: none;
    }
    
    blockquote, q {
        quotes: none;
    }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    
    *{
        font-weight: 200 ;
        font-family: "Rubik Spray Paint";
        box-sizing: border-box;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    strong {
        font-weight: bold;
    }

    .head{
        font-size: 20px ;
        display: flex ;
        justify-content: center ;
        flex-wrap: wrap ;
        padding: 20px ;
        height: 100px ;
    }

    span{
        font-size: 20px ;
        width: 100% ;
        text-align: center ;
    }
    
    input{
        border-radius:10px 0px 0px 10px;
        font-size: 20px ;
        width: 80%;
        padding: 10px;
        height: 100% ;

        :focus, select:focus { 
            border: 1 none;
            outline: 0;
        }
        
    }
    
    form{
        width: 100% ;
        display:flex ;
        align-items:center ;
    }

    .assignment{
        display: flex ;
        justify-content: space-between ;
        margin:10px 0px 10px 0px ;
        padding: 5px ;
        margin-left: 2.5% ;
        width: 95% ;
        border-radius:10px;
        border:royalblue 1px solid;
        background-color: #ffffff;
        animation: fadeIn 1s;
        @keyframes fadeIn {
            0% {
                transform: translate(100%);
                }
            100% {
                transform: translate(0);
                }
        }

    }
    button{
        border-radius:0px 10px 10px 0px;
        font-size: 20px ;
        width: 20%;
        height: 100%;
        transition: 0.2s all;
        :active{
            transform:scale(0.50);
            
        }
    }
    
`;

export default GlobalStyle;
