
## App.jsx

```jsx
return (
    <>
    <div className={Style.wrapper}>
      <Search/>
      <div className={Style.container}>
        <div className={Style.cardSection}>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      </div>
    </>
  )
```

## Card.jsx

```jsx
return (
    <>
        <div className={Style.card}>
            <img className={Style.profile} src="image" alt='' />
            <h2 className={Style.name}>Jhon Doe</h2>
            <p className={Style.job}>Developer</p>
        </div>
    </>
  )
```

## Search.jsx

```jsx
    return (
    <>
      <div className={Style.searchWrapper}>
        <div className={Style.iconSection}>.Logo</div>
        <div className={Style.searchSection}>
          <button className={Style.searchButton}>New</button>
          <button className={Style.searchButton}>Search</button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </>
  );

```

## style.css
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
}
```

## card.module.css

```css
    .card{
    height: 400px;
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    z-index: 1;
}
.card:hover{
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.288);
}

.profile{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}
.name{
    font-size: 25px;
    font-weight: 700;
    /* color: #333; */

}
.job{
    font-size: 20px;
    font-weight: 500;
    color: #777777bd;
}
```
## search.module.css
```css
    .searchWrapper{
    /* width: 100%; */
    height: 80px;
    /* background-color: red; */
    /* background-color: #fff; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    position: sticky;
    top: 0;
    left: 0;
    /* width: 100vw; */
    background: rgb(255, 255, 255);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;
    
}
.iconSection{
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: 800;
}
.searchSection{
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 0px; */
    background-color: #fff;
    height: 50px;
    width: fit-content;
    gap:10px;
    /* background-color: red; */
}
.searchButton{
    /* padding: 8px 20px; */
    height: 50px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #00aeff;
    color: #fff;
    border-radius: 10px;
    font-size: 19px;
    border: none;
    transition: all 0.3s ease;

}
.searchButton:hover{
    background-color: #00a0ff;
    /* transform: scale(0.99); */

}
.searchSection input{
    width: 500px;
    height: 100%;
    border: 1px solid #000;
    outline: none;
    font-size: 20px;
    padding-left: 20px;
    border-radius: 10px;
    /* background-color: red; */

}
```
## style.module.css

```css
    
.wrapper{
    width: 100%;
    min-height: 100vh;
    background: rgb(248,249,215);
    background: linear-gradient(180deg, rgba(248,249,215,1) 0%, rgba(178,200,223,1) 100%);
    position: relative;
}
.container{
    width: min(1820px,95%);
    min-height: 100vh;
    margin: 0 auto;
    padding-bottom: 80px;
    /* background-color: red; */
}
.cardSection{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    /* margin-top: 20px; */
    padding-top: 50px;
}
```

## datas
```js
    [
    {
      name: "Essie Villanueva",
      job: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      name: "Harlan Lynn",
      job: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Leticia Stout",
      job: "Fullstack Developer",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "Juanita Cole",
      job: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      name: "Josef Bauer",
      job: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
      name: "Claud Harrington",
      job: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      name: "Boyd Huang",
      job: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Amy Carey",
      job: "Backend Developer",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      name: "Mattie Francis",
      job: "Fullstack Developer",
      image: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
      name: "Collin Saunders",
      job: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      name: "Esther Young",
      job: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      name: "Cecelia Norman",
      job: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      name: "Kathy Cook",
      job: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    {
      name: "Sheldon Saunders",
      job: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Karin Parrish",
      job: "Fullstack Developer",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    }
  ]
```
