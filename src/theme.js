import styled, { createGlobalStyle } from "styled-components";

export const darktheme = {
    darkOpaque: "100%",
    lightOpaque: "10%",
    body: "#212121",
    fontColor: "#fff",
    logo: "logo1",
    itembg: "#333333"
};

export const lighttheme = {
    lightOpaque: "100%",
    darkOpaque: "10%",
    body: "#fff",
    fontColor: "black",
    logo: "logo2",
    itembg: "#F0F0F0"
};

export const Globalstyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.body};
    font-family: 'Inter', serif;
}

section{
    padding: 20px;
}

section h2{
    color: ${(props) => props.theme.fontColor};
}

section span{
    color: ${(props) => props.theme.fontColor};
}

::-webkit-scrollbar{
    width: 5px;
    background-color: ${props => props.theme.body};
}

::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.fontColor};
    border: 1px solid ${props => props.theme.body};
    border-radius: 20px;
}
`;

export const StyledSearched = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.fontColor};

    .breadcrumbs{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    .breadcrumbs span{
        font-size: 12px;
    }

    .breadcrumbs a{
        text-decoration: none;
        color: ${(props) => props.theme.fontColor};
    }


`

export const StyledCustomerService = styled.div`
`;

export const HomeStyled = styled.div`
section{
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
}

.covers-container{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.covers-container .some-text{
    text-align: center;
}

.covers-container .some-text a{
    font-size: 12px;
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
}

.some-updates{
    width: 100%;
    height: 150px;
    display: flex;
    position: relative;
    border: 1px solid ${(props) => props.theme.fontColor};
    justify-content: center;
    overflow: hidden;
}

.some-updates a{
    display: flex;
    position: absolute;
    bottom: 10px;
    font-size: 12px;
    text-decoration: none;
    color:black;
    border: 1px solid ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.body}20;
    backdrop-filter: blur(100px) brightness(250%);
    padding: 10px;
    z-index: 1;
    overflow: hidden;
}

.some-updates img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.covers-container .some-text a:hover{
    text-decoration: underline;
}

.image-container{
    width: 100%;
    height: 100%;
}

.image-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid ${(props) => props.theme.fontColor};
    aspect-ratio: 2/1;
}

@media screen and (max-width: 1024px) {
    .covers-container{
        width: 100%;
    }

    .image-container{
        width: 100%;
        height: 100%;
    }

    .image-container img{
        aspect-ratio: 2/1;
    }
}
`;

export const StyledNavbar = styled.div`
    font-size: 13px;

    nav{
        position: relative;
        width: 100%;
        height: auto;
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        z-index: 100;
    }
    
    a{
        text-decoration: none;
        color: ${(props) => props.theme.fontColor};
    }

    li{
        list-style: none;
    }

    svg{
        width: 23px;
        height: 23px;
    }

    .topnav{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        padding-bottom: 5px;
        
    }

    .right-topnav{
        display: flex;
        gap: 15px;
        align-items: center;
    }

    .right-topnav .account{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .right-topnav .canvas{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 19px;
        width: 39px;
        border-radius: 20px;
        padding: 0;
        transition: 200ms ease-in-out;
        cursor: pointer;
        overflow: hidden;
        border: 2px solid ${props => props.theme.fontColor};
    }

    .right-topnav .canvas svg{
        height: 16px;
        height: 16px;
        margin-left: -2px;
        margin-right: -2px;
        transition: 50ms ease-in-out;
    }

    .right-topnav .canvas svg:first-child{
        opacity: ${(props) => props.theme.darkOpaque};
    }

    .right-topnav .canvas svg:last-child{
        opacity: ${(props) => props.theme.lightOpaque};
    }

    .centernav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    .left-centernav{
        display: flex;
        gap: 15px;
        align-items: center;
        list-style: none;
    }

    .right-centernav{
        display: flex;
        gap: 15px;
        align-items: center;
    }

    .right-centernav > *{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }

    .botnav{
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        margin-top: -50px;
    }

    .botnav .brand-logo a img{
        height: 86px;
        width: 86px;
    }

    img.dark-mode{
        filter: invert();
    }

    .botnav .menus{
        display: flex;
        align-items: center;
    }
    
    .botnav .menus .menu-list{
        display: flex;
        width: auto;
        list-style: none;
        justify-content: center;
        gap: 10px;
    }

    .botnav .menus .menu-list li{
        padding: 5px;
        padding-bottom: 0px;
        cursor: pointer;
    }

    .menu-list li span{
        padding-bottom: 5px;
    }
    
    .menu-list .tohover{
        display: flex;
        border-bottom: none;
        justify-content: center;
    }

    .menu-list .tohover.on-hover::after{
        content: "";
        position: absolute;
        width: 10px;
        height: 2px;
        bottom: 0;
        transform: rotate(-40deg);
        margin-left: 5px;
        pointer-events: none;
        background-color: ${(props) => props.theme.fontColor};
    }

    .menu-list .tohover.on-hover::before{
        content: "";
        position: absolute;
        width: 10px;
        height: 2px;
        bottom: 0;
        transform: rotate(40deg);
        margin-left: -5px;
        pointer-events: none;
        background-color: ${(props) => props.theme.fontColor};
    }

    .menu-list .active-menu{
        font-weight: bold;
    }

    .menu-list .active{
        font-weight: bold;
    }

    .top-menus li a{
        font-size: 13px;
        font-weight: 300;
    }

    .top-menus .active{
        font-weight: bold;
    }

    .dropdownhover{
        position: absolute;
        height: auto;
        width: 100%;
        padding: 20px;
        margin-top: -100px;
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        border-bottom: 1px solid ${(props) => props.theme.fontColor};;
        z-index: 10;
        user-select: none;
        transition: 300ms ease-in-out;
    }

    .dropdownhover.hide{
        margin-top: -200px;
    }

    .dropdownhover.hide:hover{
        display: none;
    }

    .dropdownhover.show{
        display: block;
        margin-top: 0;
    }

    .top-menus{
        display: flex;
        justify-content: center;
        gap: 50px;
    }

    .top-menus-skeleton{
        display: flex;
        justify-content: center;
        gap: 50px;
    }

    .top-menus-skeleton ul{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .top-menus-skeleton ul li:first-child{
        position: relative;
        height: 17px;
        width: 95px;
        margin-bottom: 5px;
        animation: skeletonanimate 1000ms infinite alternate;
    }

    @keyframes skeletonanimate {
        0%{
            background-color: ${(props) => props.theme.itembg};
        }
        100%{
            background-color: ${(props) => props.theme.itembg}70;
        }
    }

    .top-menus-skeleton li{
        position: relative;
        height: 15px;
        width: 61px;
        background-color: azure;
        animation: skeletonanimate 1000ms infinite alternate-reverse;
    }

    .top-menus span{
        font-weight: bold;
        margin-bottom: 5px;
    }

    .top-menus ul{
        display: flex;
        flex-direction: column;
    }

    .top-menus ul li{
        display: flex;
    }


    .menu-show{
        display: none;
    }

    .menu-show span{
        cursor: pointer;
    }

    .menu-show a img{
        position: relative;
        width: 50px;
        height: 50px;
        z-index: -1
    }

    .search{
        position: absolute;
        left: 20px;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0 3px;
        color: ${(props) => props.theme.fontColor};
        overflow: hidden;
        border-bottom: 1px solid ${(props) => props.theme.fontColor};
    }

    .search input{
        width: 100px;
        height: 100%;
        outline: none;
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        border: none;
    }

    .side-menu-container{
        display: none;
    }

    

    @media screen and (max-width: 1024px){
        .botnav{
            display: none;
        }

        #shoppingbag span, #favorites span{
            display: none;
        }

        .right-topnav{
            gap: 0;
        }

        .right-topnav .account{
            display: none;
        }

        .left-topnav > a{
            display: none;
        }

        .left-centernav a{
            display: none;
        }
        

        .menu-show{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .centernav{
            height: 30px;
        }

        .search{
            position: static;
        }

        .side-menu-container{
            display: flex;
        }

        .side-menu-container .side-menu-list{
            transition: margin ease-out 150ms;
        }

        .side-menu-container.show .side-menu-list{
            transition: margin ease-in 300ms;
        }

        .side-menu-list{
            display: flex;
            position: fixed;
            width: 80%;
            height: 100vh;
            margin-left: -80%;
            background-color: ${(props) => props.theme.body};
            z-index: 1000;
            overflow-x: hidden;
        }

        .side-menu-container .backdrop{
            position: fixed;
            width: 100vw;
            height: 100vh;
            margin-left: -100%;
            background-color: ${(props) => props.theme.itembg}90;
            backdrop-filter: blur(5px);
            z-index: 100;
        }

        .side-menu-container.show .side-menu-list{
            margin-left: 0px;
        }

        .side-menu-container.show .backdrop{
            margin-left: 0;
        }

        .side-menu-list > ul{
            position: absolute;
            width: 100%;
            height: 100vh;
            transition: margin ease-in-out 300ms;
            overflow-y: auto;
        }

        .side-menu-shopby, .side-menu-viewby{
            margin-left: 100%;
            background-color:  ${(props) => props.theme.body};
        }

        .side-menu-list li{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .side-menu-list a{
            width: 100%;
            height: 60px;
            padding: 20px;
        }

        .side-menu-list li span{
            height: 60px;
            padding: 20px;
        }

        .side-menu-list svg{
            margin-right: 20px;
            margin-left: 20px;
        }

        .side-menu-list a.active{
            font-weight: bold;
            background-color: ${(props) => props.theme.itembg};
            text-decoration: overline;
        }

        .side-menu-list li:hover, .side-menu-list a:hover{
            color: ${(props) => props.theme.body};
            background-color: ${(props) => props.theme.fontColor};
        }

        /* show shopby if true */
        .side-menu-shopby.show, .side-menu-viewby.show{
            margin-left: 0;
        }

        .side-menu-list li.active {
            background-color: ${(props) => props.theme.itembg};
            font-weight: bold;
            text-decoration: overline;
        }

        .side-menu-list li.active:hover{
            color: ${(props) => props.theme.body};
            background-color: ${(props) => props.theme.fontColor};
        }
    }
`;

export const StyledItem = styled.div`
    .item{
        background-color: ${(props) => props.theme.itembg};
        border: 1px solid ${props => props.theme.fontColor};
        color: ${(props) => props.theme.fontColor};
        overflow: hidden;
    }

    a{
        text-decoration: none;
    }

    .cover{
        aspect-ratio: 2 / 3;
        width: 100%;
        height: 100%;
    }

    .cover img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .lower-info{
        margin-top: 0;
        background-color: ${(props) => props.theme.itembg};
        padding: 5px;
        height: 100%;
        width: 120px; 
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const StyledProducts = styled.div`

    a{
        text-decoration: none;
        font-size: 13px;
        color: ${(props) => props.theme.fontColor};
    }

    .products{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    span{
        font-size: 13px;
    }

    .main-container{
        display: flex;
        gap: 5px;
    }

    .breadcrumbs{
        display: flex;  
        justify-content: center;
    }

    .side-main-container{
        width: 100%;
        display: flex;
        gap: 0;
        flex-direction: column;
        z-index: 0;
    }

    .side-nav{
        padding: 10px;
        position: sticky;
        top: 0;   
        min-width: 170px;
        height: 100%;
        background-color: ${props => props.theme.itembg};
        z-index: 0;
        border: 1px solid ${props => props.theme.fontColor};
    }

    .side-nav .side-filter, .side-filter-items{
        list-style: none;
        margin-left: 10px;
        margin-top: 5px;
    }

    .side-nav .side-filter-items{
        font-weight: 300;
    }

    .side-nav .side-filter-items .active{
        font-weight: bold;
    }

    .side-nav .side-filter .side-filter-header{
        font-weight: bold;
        font-size: 13px;
    }

    .side-nav-fixed-skeleton{
        padding: 10px;
        display:flex;
        flex-direction: column;
        gap: 10px;
    }

    .side-nav-fixed-skeleton ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 5px;
        margin-bottom: 15px;
    }

    .side-nav-fixed-skeleton ul li:first-child{
        position: relative;
        height: 17px;
        width: 91px;
        margin-left: 0; 
        margin-bottom: 6px;
        animation: animationskeleton 1000ms infinite alternate;
    }

    .side-nav-fixed-skeleton li{
        position: relative;
        height: 15px;
        width: 61px;
        list-style: none;
        margin-left: 10px;
        animation: animationskeleton 1000ms infinite alternate-reverse;
    }

    @keyframes animationskeleton {
        0%{
            background-color: ${props => props.theme.fontColor};
            opacity: 3%;
        }
        100%{
            background-color: ${props => props.theme.fontColor};
            opacity: 7%;
        }
    }

    .side-filter > *{
        margin-bottom: 20px;
    }

    .products-container{
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        width: 100%;
        height: 100%;
        grid-gap: 5px;
        }

    .loading-products-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
    }

    .loading-spinner{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-spinner::before{
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${props => props.theme.fontColor};
    }

    .loading-spinner::after{
        content: "";
        position: absolute;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: ${props => props.theme.body};
    }

    .loading-spinner-hand{
        content: "";
        position: absolute;
        width: 7px;
        height: 40px;
        background-image: linear-gradient(to bottom, transparent, ${props => props.theme.body} );
        animation: rotatehand 1000ms normal infinite;

    }

    @keyframes rotatehand {
        0%{
            transform: rotate(0deg)
        }
        100%{
            transform: rotate(360deg)
        }
    }

    .filter{
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        height: 46px;
        padding:10px;
        margin-bottom: 5px;
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.itembg};
        border: 1px solid ${props => props.theme.fontColor};
        z-index: 1;
    }

    .filter-function{
        display: flex;
        gap: 20px;
        overflow: hidden;
    }
    /* media quiries------------------------------------------------------- */
        @media screen and (max-width: 2870px ) {
            .products-container{
                grid-template-columns: repeat(6, 1fr);
            }
        }

        @media screen and (max-width: 2560px ) {
            .products-container{
                grid-template-columns: repeat(6, 1fr);
            }
        }

        @media screen and (max-width: 2040px ) {
            .products-container{
                grid-template-columns: repeat(5, 1fr);
            }
        }

        @media screen and (max-width: 1440px ) {
            .products-container{
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media screen and (max-width: 1244px ) {
            .products-container{
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media screen and (max-width: 1024px ) {
            .products-container{
                grid-template-columns: repeat(3, 1fr);
            }
            
        }

        @media screen and (max-width: 768px ) {   
            .products-container{
                grid-template-columns: repeat(3, 1fr);
            }

            .side-nav{
                display: none;
            }
        }

        @media screen and (max-width: 635px ) {
            .products-container{
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media screen and (max-width: 420px ) {
            .products-container{
                grid-template-columns: repeat(2, 1fr);
            }
        }

        
`;

export const StyledSingleProduct = styled.div`
    display: flex;
    justify-content: center;

    span{
        font-size: 13px;
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.fontColor};
    }
    .item{
        width: 80%;
        height: 100%;
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    .cover{
        width: 100%;
        height: 100%;
        gap: 10px;
        display: flex;
    }
    
    .info{
        background-color: ${(props) => props.theme.itembg};
    }

    .single-image{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border: 1px solid ${(props) => props.theme.fontColor};
        aspect-ratio: 2.5/4;
    }

    .single-image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 2.5/4;
    }

    .info-container{
        width: 300px;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-color: ${(props) => props.theme.itembg};
        border: 1px solid ${(props) => props.theme.fontColor};
        color: ${(props) => props.theme.fontColor};
        position: sticky;
        top: 0;
        gap: 20px;
        
    }

    .info-container .left{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .info-container .left .itemname{
        font-weight: bold;
    }

    @media screen and (max-width: 1065px) {
        .item{
            width: 100%;
            flex-direction: column;
        }

        .info-container{
            width: 100%;
        }
    }
`;
