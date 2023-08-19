const clothes = [
    {
        id: 1,
        title: 'Jeans',
        price: '$20.95',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        title: 'Formal Pants',
        price: '$20',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor consectetur adipisicing elit.",
    },
    {
        id: 3,
        title: 'Joggers',
        price: '$25',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        title: 'Jeans',
        price: '$20.95',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 5,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 6,
        title: 'Tshirt',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 7,
        title: 'Shirts',
        price: '$19',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 8,
        title: 'Boxer',
        price: '$12',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 9,
        title: 'Casual Jeans',
        price: '$14',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 10,
        title: 'Printed shirt',
        price: '$5',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dg  tg drd yryfhn dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 11,
        title: 'Collar tshirt',
        price: '$17',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem fh ddg rgr dfgdf ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 12,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur llorem dfhdkjfh hueir u h adipisicing elit.",
    },
    {
        id: 13,
        title: 'dunglasses',
        price: '$18',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 14,
        title: 'shorts',
        price: '$13',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 15,
        title: 'socks',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 16,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 17,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 18,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 19,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 20,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 21,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 22,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 23,
        title: 'Pants',
        price: '$15',
        imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aeo.in%2Fcategory%2Fmen%2Fjeans-1961&psig=AOvVaw26gyGPHVOrt5v2x3Ey9UUs&ust=1692513572209000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDvl8SO6IADFQAAAAAdAAAAABAK",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    }
]

clothes.map((cloth) => {
    // console.log(`ID: ${cloth.id}`);
    // console.log(`Title: ${cloth.title}`);
    // console.log(`Price: ${cloth.price}`);
    // console.log(`Image: ${cloth.imageURL}`);
    // console.log(`Desc: ${cloth.description}`);
})