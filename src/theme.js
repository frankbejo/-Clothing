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
    display: flex;
    color: white;
    justify-content: center;
}

.image-container{
    width: 900px;
}

.image-container img{
    width: 100%;
    height: auto;

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
        gap: 20px;
    }

    .top-menus span{
        font-weight: bold;
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

    .menu-show a img{
        width: 50px;
        height: 50px;
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

    @media screen and (max-width: 768px){
        .botnav{
            display: none;
        }

        .botnav{
            margin-top: -20px;
            padding-bottom: 20px;
        }

        #shopping #favorites, span{
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
        background-color: ${props => props.theme.fontColor};;
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
                grid-template-columns: repeat(5, 1fr);
            }
        }

        @media screen and (max-width: 2040px ) {
            .products-container{
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media screen and (max-width: 1440px ) {
            .products-container{
                grid-template-columns: repeat(4, 1fr);
            }
        }

        @media screen and (max-width: 1244px ) {
            .products-container{
                grid-template-columns: repeat(3, 1fr);
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
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media screen and (max-width: 420px ) {
            .products-container{
                grid-template-columns: repeat(3, 1fr);
            }

        }

        @media screen and (max-width: 400px ) {
            .products-container{
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media screen and (max-width: 320px ) {
            .products-container{
                grid-template-columns: repeat(2, 1fr);
            }
        }

        
`;

export const StyledSingleProduct = styled.div`
    display: flex;
    justify-content: center;

    section{
        height: 1000vh;
    }

    span{
        font-size: 13px;
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.fontColor};
    }
    .item{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    
    .cover{
        gap: 10px;
        flex-direction: row;
        height: auto;
        justify-content: center;
        
    }

    .single-image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-size: contain;
    }

    .info{
        min-width: 350px;
        max-width: 100%;
        background-color: black;
        position: relative;
    }

    .info-container{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-color: ${(props) => props.theme.itembg};
        color: ${(props) => props.theme.fontColor};
        position: sticky;
        top: 0;
        
    }

    .info-container .left{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media screen and (max-width: 1065px) {
        .item{
            flex-direction: column;
        }
    }
`;
