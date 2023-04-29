export const actionType = {
    //filterAction
    FETCH_ALL_FILTERS: 'FETCH_ALL_FILTERS',

    FILTERS_CHANGED: 'FILTERS_CHANGED',
    NAME_CHECKED_CANCELLED: 'NAME_CHECKED_CANCELLED',

    //productAction
    FETCH_TOTAL_PRODUCTS: 'FETCH_TOTAL_PRODUCTS',
    FETCH_HARD_CODE_PRODUCTS: 'FETCH_HARD_CODE_PRODUCTS',
    FETCH_FILTERED_PRODUCTS: 'FETCH_FILTERED_PRODUCTS',
    FETCH_LOW_TO_HIGH_PRODUCTS: 'FETCH_LOW_TO_HIGH_PRODUCTS',
    FETCH_HIGH_TO_LOW_PRODUCTS: 'FETCH_HIGH_TO_LOW_PRODUCTS',
    FETCH_TOP_RATED_PRODUCTS: 'FETCH_TOP_RATED_PRODUCTS',
    FETCH_SINGLE_PRODUCT: `FETCH_SINGLE_PRODUCT`,
    FETCH_COLORID: `FETCH_COLORID`,

    SELECTED_IMAGE: 'SELECTED_IMAGE',

    LOADING_PRODUCTS: 'LOADING_PRODUCTS',

    //cartAction
    GET_NUMBER_BAG: `GET_NUMBER_BAG`,
    GET_SIZE: 'GET_SIZE',
    GET_SUBTOTAL: 'GET_SUBTOTAL',
    ADD_TO_SHOPPING_BAG: 'ADD_TO_SHOPPING_BAG',

    REMOVE_FROM_SHOPPING_BAG: 'REMOVE_FROM_SHOPPING_BAG',
    INCREASE_QUANTITY: `INCREASE_QUANTITY`,
    DECREASE_QUANTITY: `DECREASE_QUANTITY`,

    // login
    SUBMIT_LOGIN: `SUBMIT_LOGIN`,
    SIGN_OUT: 'SIGN_OUT',
    LOGIN_FAIL: 'LOGIN_FAIL',
    ORDER_SUCCESS: 'ORDER_SUCCESS',

    // login
    LOGIN_REQUEST : 'LOGIN_REQUEST',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_FAILURE : 'LOGIN_FAILURE',

    PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',









}

// export const API_FILTERS_URL = `http://api-lulu.hibitbyte.com/product/filter?mykey=QvrVhIMNTrvuvwpJwF3Ns9o4G8Dk8a/NFv6dOatsdXhuIDr0uGc%2Bt0KnkYoO79%2BGTbQQu2qw3yPopBdV3vBlfg==`
// export const API_FILTERS_URL = `http://api-lulu.hibitbyte.com/product/filter?mykey=EbOI/a1rXgu5LJIw3YO3Pc%2BIPOcSrpBUZf8IgDQx7bD1yKWdxr56lThseNRCnggzQTFpW1UajDBrVMY38AybEA==`
export const API_FILTERS_URL = `http://api-lulu.hibitbyte.com/product/filter?mykey=JiPkV9ek%2BU4GQ3IRQYLsXVeKTgB09QcIO%2BzRx/PwbPlrTMss3Iauhtr8Jrb9mjOiziVij0Vb1/6UII7fmKnYtQ==`
// export const API_FILTERS_URL = `http://api-lulu.hibitbyte.com/product/filter?mykey=AEG3JJ%2BzG8skgjpIHH7EkpyXWp5VcGKq3xE6egpW1y/Z%2Bpy2l4J/R9616YsqMvLIHPT6kYCvUPAYpXQIBEi27Q==`


export const API_URL_ALL_PRODUCTS = `http://api-lulu.hibitbyte.com/product/allProducts?mykey=QvrVhIMNTrvuvwpJwF3Ns9o4G8Dk8a/NFv6dOatsdXhuIDr0uGc%2Bt0KnkYoO79%2BGTbQQu2qw3yPopBdV3vBlfg==`
// export const API_URL_ALL_PRODUCTS = `http://api-lulu.hibitbyte.com/product/allProducts?mykey=AEG3JJ%2BzG8skgjpIHH7EkpyXWp5VcGKq3xE6egpW1y/Z%2Bpy2l4J/R9616YsqMvLIHPT6kYCvUPAYpXQIBEi27Q==`
// export const API_URL_ALL_PRODUCTS = `http://api-lulu.hibitbyte.com/product/allProducts?mykey=EbOI/a1rXgu5LJIw3YO3Pc%2BIPOcSrpBUZf8IgDQx7bD1yKWdxr56lThseNRCnggzQTFpW1UajDBrVMY38AybEA==`
// export const API_URL_ALL_PRODUCTS = `http://api-lulu.hibitbyte.com/product/allProducts?mykey=JiPkV9ek%2BU4GQ3IRQYLsXVeKTgB09QcIO%2BzRx/PwbPlrTMss3Iauhtr8Jrb9mjOiziVij0Vb1/6UII7fmKnYtQ==`


// export const API_URL_SORTED_PRODUCTS =`http://api-lulu.hibitbyte.com/product/allProducts?mykey=QvrVhIMNTrvuvwpJwF3Ns9o4G8Dk8a/NFv6dOatsdXhuIDr0uGc%2Bt0KnkYoO79%2BGTbQQu2qw3yPopBdV3vBlfg==`
// export const API_URL_SORTED_PRODUCTS = `http://api-lulu.hibitbyte.com/product/allProducts?sortingId=1&page=1&mykey=EbOI/a1rXgu5LJIw3YO3Pc%2BIPOcSrpBUZf8IgDQx7bD1yKWdxr56lThseNRCnggzQTFpW1UajDBrVMY38AybEA==`
export const API_URL_SORTED_PRODUCTS =`http://api-lulu.hibitbyte.com/product/allProducts?sortingId=1&page=1&mykey=JiPkV9ek%2BU4GQ3IRQYLsXVeKTgB09QcIO%2BzRx/PwbPlrTMss3Iauhtr8Jrb9mjOiziVij0Vb1/6UII7fmKnYtQ==` //Michelle
// export const API_URL_SORTED_PRODUCTS =`http://api-lulu.hibitbyte.com/product/allProducts?sortingId=1&page=1&mykey=AEG3JJ%2BzG8skgjpIHH7EkpyXWp5VcGKq3xE6egpW1y/Z%2Bpy2l4J/R9616YsqMvLIHPT6kYCvUPAYpXQIBEi27Q==` //Anna

// export const URL_SORTED_PRODUCTS =`http://api-lulu.hibitbyte.com/product/allProducts?${sortingId}&${page}&mykey=EbOI/a1rXgu5LJIw3YO3Pc%2BIPOcSrpBUZf8IgDQx7bD1yKWdxr56lThseNRCnggzQTFpW1UajDBrVMY38AybEA==`  // Fan
// export const URL_SORTED_PRODUCTS =`http://api-lulu.hibitbyte.com/product/allProducts?${sortingId}&${page}&mykey=QvrVhIMNTrvuvwpJwF3Ns9o4G8Dk8a/NFv6dOatsdXhuIDr0uGc%2Bt0KnkYoO79%2BGTbQQu2qw3yPopBdV3vBlfg==`

// export const mykey = 'AEG3JJ%2BzG8skgjpIHH7EkpyXWp5VcGKq3xE6egpW1y/Z%2Bpy2l4J/R9616YsqMvLIHPT6kYCvUPAYpXQIBEi27Q=='
// export const mykey = `QvrVhIMNTrvuvwpJwF3Ns9o4G8Dk8a/NFv6dOatsdXhuIDr0uGc%2Bt0KnkYoO79%2BGTbQQu2qw3yPopBdV3vBlfg==`
// export const mykey = `EbOI/a1rXgu5LJIw3YO3Pc%2BIPOcSrpBUZf8IgDQx7bD1yKWdxr56lThseNRCnggzQTFpW1UajDBrVMY38AybEA==`
export const mykey = `JiPkV9ek%2BU4GQ3IRQYLsXVeKTgB09QcIO%2BzRx/PwbPlrTMss3Iauhtr8Jrb9mjOiziVij0Vb1/6UII7fmKnYtQ==`

export const LOGIN_API_URL =`http://api-lulu.hibitbyte.com/auth/login?mykey=${mykey}`
export const PLACE_ORDER_API_URL =`http://api-lulu.hibitbyte.com/order?mykey=${mykey}`




export const productLibrary = [


    {
        "productId": "prod11140039",
        "swatches": [
            {
                "colorId": "47759",
                "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Smoked_Spruce_47759.jpg",
                "swatchAlt": "Smoked Spruce"
            },
            {
                "colorId": "49844",
                "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Natural_Ivory_49844.jpg",
                "swatchAlt": "Natural Ivory"
            },
            {
                "colorId": "0001",
                "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Black_0001.jpg",
                "swatchAlt": "Black"
            }
        ],
        "images": [
            {
                "colorId": "47759",
                "colorAlt": "Smoked Spruce",
                "mainCarousel": {
                    "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img5.jpg",
                    "alt": "Smoked Spruce Brushed Softstreme Split-Hem High-Rise Crop"
                },
                "whyWeMadeThis": [
                    "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_whyWeMadeThis_img0.jpg",
                    "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_whyWeMadeThis_img1.jpg"
                ]
            },
            {
                "colorId": "49844",
                "colorAlt": "Natural Ivory",
                "mainCarousel": {
                    "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img5.jpg",
                    "alt": "Natural Ivory Brushed Softstreme Split-Hem High-Rise Crop"
                },
                "whyWeMadeThis": [
                    "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_whyWeMadeThis_img0.jpg",
                    "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_whyWeMadeThis_img1.jpg"
                ]
            },
            {
                "colorId": "0001",
                "colorAlt": "Black",
                "mainCarousel": {
                    "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img6.jpg",
                    "alt": "Black Brushed Softstreme Split-Hem High-Rise Crop"
                },
                "whyWeMadeThis": [
                    "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_whyWeMadeThis_img0.jpg",
                    "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_whyWeMadeThis_img1.jpg"
                ]
            }
        ],
        "name": "Brushed Softstreme Split-Hem High-Rise Crop",
        "price": "$128 CAD",
        "sizes": [
            {
                "title": "Select Size",
                "details": [
                    "0",
                    "2",
                    "4",
                    "6",
                    "8",
                    "10",
                    "12",
                    "14"
                ]
            }
        ],
        "featureTitles": [
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_On_the_Move.svg",
                "title": "Designed for On the Move",
                "isLink": true
            },
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Smooth_Brushed_Softstreme™_Fabric.svg",
                "title": "Smooth, Brushed Softstreme™ Fabric",
                "isLink": true
            },
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/High_Rise_25_Length.svg",
                "title": "High Rise, 25\" Length",
                "isLink": true
            },
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features.svg",
                "title": "Product Features",
                "isLink": true
            }
        ],
        "whyWeMadeThis": "Feel it to believe it. These crops have a peach-fuzz touch that's impossible to resist. Dress them up or down, and enjoy the softness all day.",
        "featurePanels": [
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_On_the_Move.svg",
                "title": "Designed for On the Move",
                "isPanel": false
            },
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Smooth_Brushed_Softstreme™_Fabric(Click_to_Expand).svg",
                "title": "Smooth, Brushed Softstreme™ Fabric(Click to Expand)",
                "isPanel": true,
                "content": [
                    "Peach-fuzz soft texture",
                    "Brushed for added warmth next to skin",
                    "Four-way stretch",
                    "Quick-drying",
                    "Weighty drape",
                    "Machine washable. Water drops can easily mark this fabric—a simple wash will remove them",
                    "Wash separately to avoid dye transfer"
                ]
            },
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/High_Rise_25_Length(Click_to_Expand).svg",
                "title": "High Rise, 25\" Length(Click to Expand)",
                "isPanel": true,
                "content": [
                    "Classic fit is an easy fit that floats away from your body",
                    "Intended to sit above ankle"
                ]
            },
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features(Click_to_Expand).svg",
                "title": "Product Features(Click to Expand)",
                "isPanel": true,
                "content": [
                    "Shockcord at the waist to customize fit",
                    "Front pockets with interior card sleeve"
                ]
            },
            {
                "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Material_and_care(Click_to_Expand).svg",
                "title": "Material and care(Click to Expand)",
                "isPanel": true,
                "content": [
                    "Body: 53% Recycled polyester, 38% Modal, 9% Elastane",
                    "Do not use fabric softener",
                    "Fully zip before washing",
                    "Wash with like colours",
                    "Machine wash cold gentle",
                    "Do not bleach",
                    "Line dry",
                    "Do not iron",
                    "Do not dry clean",
                    "Imported"
                ]
            }
        ]
    },


    {
    "productId": "prod6740204",
    "swatches": [
    {
        "colorId": "54151",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Dark_Mocha_54151.jpg",
        "swatchAlt": "Dark Mocha"
    },
    {
        "colorId": "38292",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Chambray_38292.jpg",
        "swatchAlt": "Chambray"
    },
    {
        "colorId": "26083",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Dark_Olive_26083.jpg",
        "swatchAlt": "Dark Olive"
    },
    {
        "colorId": "26865",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Iron_Blue_26865.jpg",
        "swatchAlt": "Iron Blue"
    },
    {
        "colorId": "36763",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Grey_Sage_36763.jpg",
        "swatchAlt": "Grey Sage"
    },
    {
        "colorId": "38293",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Silverstone_38293.jpg",
        "swatchAlt": "Silverstone"
    },
    {
        "colorId": "43731",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Trench_43731.jpg",
        "swatchAlt": "Trench"
    },
    {
        "colorId": "33928",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Silver_Drop_33928.jpg",
        "swatchAlt": "Silver Drop"
    },
    {
        "colorId": "45753",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Deep_Artifact_45753.jpg",
        "swatchAlt": "Deep Artifact"
    },
    {
        "colorId": "35488",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Carbon_Dust_35488.jpg",
        "swatchAlt": "Carbon Dust"
    },
    {
        "colorId": "29283",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Artifact_29283.jpg",
        "swatchAlt": "Artifact"
    },
    {
        "colorId": "31382",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/True_Navy_31382.jpg",
        "swatchAlt": "True Navy"
    },
    {
        "colorId": "35956",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Asphalt_Grey_35956.jpg",
        "swatchAlt": "Asphalt Grey"
    },
    {
        "colorId": "0001",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Black_0001.jpg",
        "swatchAlt": "Black"
    },
    {
        "colorId": "32476",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Obsidian_32476.jpg",
        "swatchAlt": "Obsidian"
    }
],
    "images": [
    {
        "colorId": "54151",
        "colorAlt": "Dark Mocha",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/54151/prod6740204_54151_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/54151/prod6740204_54151_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/54151/prod6740204_54151_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/54151/prod6740204_54151_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/54151/prod6740204_54151_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/54151/prod6740204_54151_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/54151/prod6740204_54151_img6.jpg",
            "alt": "Dark Mocha Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "38292",
        "colorAlt": "Chambray",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38292/prod6740204_38292_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38292/prod6740204_38292_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38292/prod6740204_38292_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38292/prod6740204_38292_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38292/prod6740204_38292_img4.jpg",
            "alt": "Chambray Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "26083",
        "colorAlt": "Dark Olive",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26083/prod6740204_26083_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26083/prod6740204_26083_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26083/prod6740204_26083_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26083/prod6740204_26083_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26083/prod6740204_26083_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26083/prod6740204_26083_img5.jpg",
            "alt": "dark olive Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "26865",
        "colorAlt": "Iron Blue",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26865/prod6740204_26865_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26865/prod6740204_26865_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26865/prod6740204_26865_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26865/prod6740204_26865_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/26865/prod6740204_26865_img4.jpg",
            "alt": "iron blue Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "36763",
        "colorAlt": "Grey Sage",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/36763/prod6740204_36763_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/36763/prod6740204_36763_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/36763/prod6740204_36763_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/36763/prod6740204_36763_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/36763/prod6740204_36763_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/36763/prod6740204_36763_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/36763/prod6740204_36763_img6.jpg",
            "alt": "Grey Sage Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "38293",
        "colorAlt": "Silverstone",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38293/prod6740204_38293_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38293/prod6740204_38293_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38293/prod6740204_38293_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38293/prod6740204_38293_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/38293/prod6740204_38293_img4.jpg",
            "alt": "Silverstone Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "43731",
        "colorAlt": "Trench",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/43731/prod6740204_43731_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/43731/prod6740204_43731_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/43731/prod6740204_43731_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/43731/prod6740204_43731_img3.jpg",
            "alt": "Trench Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "33928",
        "colorAlt": "Silver Drop",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/33928/prod6740204_33928_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/33928/prod6740204_33928_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/33928/prod6740204_33928_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/33928/prod6740204_33928_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/33928/prod6740204_33928_img4.jpg",
            "alt": "Silver Drop Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "45753",
        "colorAlt": "Deep Artifact",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/45753/prod6740204_45753_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/45753/prod6740204_45753_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/45753/prod6740204_45753_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/45753/prod6740204_45753_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/45753/prod6740204_45753_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/45753/prod6740204_45753_img5.jpg",
            "alt": "Deep Artifact Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "35488",
        "colorAlt": "Carbon Dust",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35488/prod6740204_35488_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35488/prod6740204_35488_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35488/prod6740204_35488_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35488/prod6740204_35488_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35488/prod6740204_35488_img4.jpg",
            "alt": "Carbon Dust Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "29283",
        "colorAlt": "Artifact",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/29283/prod6740204_29283_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/29283/prod6740204_29283_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/29283/prod6740204_29283_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/29283/prod6740204_29283_img3.jpg",
            "alt": "artifact Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "31382",
        "colorAlt": "True Navy",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/31382/prod6740204_31382_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/31382/prod6740204_31382_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/31382/prod6740204_31382_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/31382/prod6740204_31382_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/31382/prod6740204_31382_img4.jpg",
            "alt": "True Navy Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "35956",
        "colorAlt": "Asphalt Grey",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35956/prod6740204_35956_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35956/prod6740204_35956_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35956/prod6740204_35956_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35956/prod6740204_35956_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/35956/prod6740204_35956_img4.jpg",
            "alt": "Asphalt Grey Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "0001",
        "colorAlt": "Black",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/0001/prod6740204_0001_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/0001/prod6740204_0001_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/0001/prod6740204_0001_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/0001/prod6740204_0001_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/0001/prod6740204_0001_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/0001/prod6740204_0001_img5.jpg",
            "alt": "Black Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    },
    {
        "colorId": "32476",
        "colorAlt": "Obsidian",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/32476/prod6740204_32476_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/32476/prod6740204_32476_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/32476/prod6740204_32476_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/32476/prod6740204_32476_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/32476/prod6740204_32476_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod6740204/32476/prod6740204_32476_img5.jpg",
            "alt": "Obsidian Commission Classic-Fit Pant 34\" Warpstreme"
        },
        "whyWeMadeThis": []
    }
],
    "name": "Commission Classic-Fit Pant 34\" Warpstreme",
    "price": "$138 CAD",
    "sizes": [
    {
        "title": "Select Size",
        "details": [
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "38",
            "42",
            "44",
            "46"
        ]
    },
    {
        "title": "Length",
        "details": [
            "28\"",
            "30\"",
            "32\"",
            "37\""
        ]
    }
],
    "featureTitles": [
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_On_the_Move.svg",
        "title": "Designed for On the Move",
        "isLink": true
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Everyday_Performance_Warpstreme™_Fabric.svg",
        "title": "Everyday Performance, Warpstreme™ Fabric",
        "isLink": true
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Classic_Fit_34_Length.svg",
        "title": "Classic Fit, 34\" Length",
        "isLink": true
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features.svg",
        "title": "Product Features",
        "isLink": true
    }
],
    "featurePanels": [
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_On_the_Move.svg",
        "title": "Designed for On the Move",
        "isPanel": false
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Everyday_Performance_Warpstreme™_Fabric(Click_to_Expand).svg",
        "title": "Everyday Performance, Warpstreme™ Fabric(Click to Expand)",
        "isPanel": true,
        "content": [
            "Everyday performance",
            "Shape retention",
            "Quick-drying",
            "Four-way stretch",
            "Breathable",
            "Wrinkle-resistant",
            "Feels smooth, falls softly away from body",
            {
                "mediaUrl": "https://images.lululemon.com/is/content/lululemon/PDPVideo_16x9_Warpstreme"
            }
        ]
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Classic_Fit_34_Length(Click_to_Expand).svg",
        "title": "Classic Fit, 34\" Length(Click to Expand)",
        "isPanel": true,
        "content": [
            "Streamlined fit that gives glutes and thighs breathing room",
            "Our ABC™ technology uses an ergonomic gusset to remove tension from the crotch of our pants so you can move in comfort"
        ]
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features(Click_to_Expand).svg",
        "title": "Product Features(Click to Expand)",
        "isPanel": true,
        "content": [
            "Hidden zippered pocket",
            "Hidden snaps mean the back pockets won't gape",
            "Flip up the cuffs to reveal reflective details"
        ]
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Material_and_care(Click_to_Expand).svg",
        "title": "Material and care(Click to Expand)",
        "isPanel": true,
        "content": [
            "Pockets: 100% Recycled polyester",
            "Body: 53% Elastomultiester, 47% Recycled polyester",
            "Wash with like colours",
            "Machine wash cold",
            "Do not bleach",
            "Tumble dry low",
            "Do not iron",
            "Do not dry clean",
            "Imported"
        ]
    }
]
},


{
    "productId": "prod9750365",
    "swatches": [
    {
        "colorId": "47759",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Smoked_Spruce_47759.jpg",
        "swatchAlt": "Smoked Spruce"
    },
    {
        "colorId": "56435",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Orange_Frappe_56435.jpg",
        "swatchAlt": "Orange Frappe"
    },
    {
        "colorId": "45785",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Gull_Grey_45785.jpg",
        "swatchAlt": "Gull Grey"
    },
    {
        "colorId": "0001",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Black_0001.jpg",
        "swatchAlt": "Black"
    },
    {
        "colorId": "48432",
        "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Raw_Linen_48432.jpg",
        "swatchAlt": "Raw Linen"
    }
],
    "images": [
    {
        "colorId": "47759",
        "colorAlt": "Smoked Spruce",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img6.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img7.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img8.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_img9.jpg",
            "alt": "Smoked Spruce Warp Light Packable Jacket"
        },
        "whyWeMadeThis": [
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_whyWeMadeThis_img0.jpg",
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/47759/prod9750365_47759_whyWeMadeThis_img1.jpg"
        ]
    },
    {
        "colorId": "56435",
        "colorAlt": "Orange Frappe",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img6.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img7.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img8.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_img9.jpg",
            "alt": "Orange Frappe Warp Light Packable Jacket"
        },
        "whyWeMadeThis": [
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_whyWeMadeThis_img0.jpg",
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/56435/prod9750365_56435_whyWeMadeThis_img1.jpg"
        ]
    },
    {
        "colorId": "45785",
        "colorAlt": "Gull Grey",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img6.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img7.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img8.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img9.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_img10.jpg",
            "alt": "Gull Grey Warp Light Packable Jacket"
        },
        "whyWeMadeThis": [
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_whyWeMadeThis_img0.jpg",
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/45785/prod9750365_45785_whyWeMadeThis_img1.jpg"
        ]
    },
    {
        "colorId": "0001",
        "colorAlt": "Black",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img6.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img7.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img8.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_img9.jpg",
            "alt": "Black Warp Light Packable Jacket"
        },
        "whyWeMadeThis": [
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_whyWeMadeThis_img0.jpg",
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/0001/prod9750365_0001_whyWeMadeThis_img1.jpg"
        ]
    },
    {
        "colorId": "48432",
        "colorAlt": "Raw Linen",
        "mainCarousel": {
            "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img0.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img6.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_img7.jpg",
            "alt": "Raw Linen Warp Light Packable Jacket"
        },
        "whyWeMadeThis": [
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_whyWeMadeThis_img0.jpg",
            "http://api-lulu.hibitbyte.com/static/images/productImages/prod9750365/48432/prod9750365_48432_whyWeMadeThis_img1.jpg"
        ]
    }
],
    "name": "Warp Light Packable Jacket",
    "price": "$148 CAD",
    "sizes": [
    {
        "title": "Select Size",
        "details": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ]
    }
],
    "featureTitles": [
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_Training.svg",
        "title": "Designed for Training",
        "isLink": true
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Water-Repellent_Swift_Fabric.svg",
        "title": "Water-Repellent, Swift Fabric",
        "isLink": true
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Classic_Fit_Hip_Length.svg",
        "title": "Classic Fit, Hip Length",
        "isLink": true
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features.svg",
        "title": "Product Features",
        "isLink": true
    }
],
    "whyWeMadeThis": "Take your workout outdoors. We made this jacket with panels of technical mesh fabric for that breezy feeling on sweaty skin.",
    "featurePanels": [
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_Training.svg",
        "title": "Designed for Training",
        "isPanel": false
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Water-Repellent_Swift_Fabric(Click_to_Expand).svg",
        "title": "Water-Repellent, Swift Fabric(Click to Expand)",
        "isPanel": true,
        "content": [
            "Water-repellent",
            "Naturally breathable WovenAir™ mesh fabric is four-way stretch and water-repellent"
        ]
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Classic_Fit_Hip_Length(Click_to_Expand).svg",
        "title": "Classic Fit, Hip Length(Click to Expand)",
        "isPanel": true,
        "content": [
            "Classic fit falls away from your body with room for layering"
        ]
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features(Click_to_Expand).svg",
        "title": "Product Features(Click to Expand)",
        "isPanel": true,
        "content": [
            "Zippered exterior pockets with a hidden phone sleeve",
            "Cinchable hood",
            "Packs into back pocket for easy storage"
        ]
    },
    {
        "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Material_and_care(Click_to_Expand).svg",
        "title": "Material and care(Click to Expand)",
        "isPanel": true,
        "content": [
            "Mesh: 89% Nylon, 11% Elastane",
            "Back mesh: 53% Recycled polyester, 43% Elastomultiester, 4% Elastane",
            "Pockets: 100% Recycled polyester",
            "Body: 91% Recycled polyester, 9% Elastane",
            "Wash with like colours",
            "Machine wash cold",
            "Do not bleach",
            "Tumble dry low",
            "Do not iron",
            "Do not dry clean",
            "Imported"
        ]
    }
]
},


]

// const products = [
//     {
//         "productId": "prod11140039",
//         "swatches": [
//             {
//                 "colorId": "47759",
//                 "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Smoked_Spruce_47759.jpg",
//                 "swatchAlt": "Smoked Spruce"
//             },
//             {
//                 "colorId": "49844",
//                 "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Natural_Ivory_49844.jpg",
//                 "swatchAlt": "Natural Ivory"
//             },
//             {
//                 "colorId": "0001",
//                 "swatch": "http://api-lulu.hibitbyte.com/static/images/swatches/Black_0001.jpg",
//                 "swatchAlt": "Black"
//             }
//         ],
//         "images": [
//             {
//                 "colorId": "47759",
//                 "colorAlt": "Smoked Spruce",
//                 "mainCarousel": {
//                     "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img0.jpg",
//                     // | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_img5.jpg",
//                     "alt": "Smoked Spruce Brushed Softstreme Split-Hem High-Rise Crop"
//                 },
//                 "whyWeMadeThis": [
//                     "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_whyWeMadeThis_img0.jpg",
//                     "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/47759/prod11140039_47759_whyWeMadeThis_img1.jpg"
//                 ]
//             },
//             {
//                 "colorId": "49844",
//                 "colorAlt": "Natural Ivory",
//                 "mainCarousel": {
//                     "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img0.jpg",
//                     // | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_img5.jpg",
//                     "alt": "Natural Ivory Brushed Softstreme Split-Hem High-Rise Crop"
//                 },
//                 "whyWeMadeThis": [
//                     "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_whyWeMadeThis_img0.jpg",
//                     "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/49844/prod11140039_49844_whyWeMadeThis_img1.jpg"
//                 ]
//             },
//             {
//                 "colorId": "0001",
//                 "colorAlt": "Black",
//                 "mainCarousel": {
//                     "media": "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img0.jpg ",
//                     // | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img1.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img2.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img3.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img4.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img5.jpg | http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_img6.jpg",
//                     "alt": "Black Brushed Softstreme Split-Hem High-Rise Crop"
//                 },
//                 "whyWeMadeThis": [
//                     "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_whyWeMadeThis_img0.jpg",
//                     "http://api-lulu.hibitbyte.com/static/images/productImages/prod11140039/0001/prod11140039_0001_whyWeMadeThis_img1.jpg"
//                 ]
//             }
//         ],
//         "name": "Brushed Softstreme Split-Hem High-Rise Crop",
//         "price": "$128 CAD",
//         "sizes": [
//             {
//                 "title": "Select Size",
//                 "details": [
//                     "0",
//                     "2",
//                     "4",
//                     "6",
//                     "8",
//                     "10",
//                     "12",
//                     "14"
//                 ]
//             }
//         ],
//         "featureTitles": [
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_On_the_Move.svg",
//                 "title": "Designed for On the Move",
//                 "isLink": true
//             },
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Smooth_Brushed_Softstreme™_Fabric.svg",
//                 "title": "Smooth, Brushed Softstreme™ Fabric",
//                 "isLink": true
//             },
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/High_Rise_25_Length.svg",
//                 "title": "High Rise, 25\" Length",
//                 "isLink": true
//             },
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features.svg",
//                 "title": "Product Features",
//                 "isLink": true
//             }
//         ],
//         "whyWeMadeThis": "Feel it to believe it. These crops have a peach-fuzz touch that's impossible to resist. Dress them up or down, and enjoy the softness all day.",
//         "featurePanels": [
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Designed_for_On_the_Move.svg",
//                 "title": "Designed for On the Move",
//                 "isPanel": false
//             },
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Smooth_Brushed_Softstreme™_Fabric(Click_to_Expand).svg",
//                 "title": "Smooth, Brushed Softstreme™ Fabric(Click to Expand)",
//                 "isPanel": true,
//                 "content": [
//                     "Peach-fuzz soft texture",
//                     "Brushed for added warmth next to skin",
//                     "Four-way stretch",
//                     "Quick-drying",
//                     "Weighty drape",
//                     "Machine washable. Water drops can easily mark this fabric—a simple wash will remove them",
//                     "Wash separately to avoid dye transfer"
//                 ]
//             },
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/High_Rise_25_Length(Click_to_Expand).svg",
//                 "title": "High Rise, 25\" Length(Click to Expand)",
//                 "isPanel": true,
//                 "content": [
//                     "Classic fit is an easy fit that floats away from your body",
//                     "Intended to sit above ankle"
//                 ]
//             },
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Product_Features(Click_to_Expand).svg",
//                 "title": "Product Features(Click to Expand)",
//                 "isPanel": true,
//                 "content": [
//                     "Shockcord at the waist to customize fit",
//                     "Front pockets with interior card sleeve"
//                 ]
//             },
//             {
//                 "iconPath": "http://api-lulu.hibitbyte.com/static/images/icons/Material_and_care(Click_to_Expand).svg",
//                 "title": "Material and care(Click to Expand)",
//                 "isPanel": true,
//                 "content": [
//                     "Body: 53% Recycled polyester, 38% Modal, 9% Elastane",
//                     "Do not use fabric softener",
//                     "Fully zip before washing",
//                     "Wash with like colours",
//                     "Machine wash cold gentle",
//                     "Do not bleach",
//                     "Line dry",
//                     "Do not iron",
//                     "Do not dry clean",
//                     "Imported"
//                 ]
//             }
//         ]
//     }
// ]
