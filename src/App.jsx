import React from 'react'
import Style from "./css/style.module.css"
import { Card, Search } from './components'

const App = () => {
  const data = [
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
  return (
    <>
    <div className={Style.wrapper}>
      <Search/>
      <div className={Style.container}>
        <div className={Style.cardSection}>
          {data.map((item, index) => (
            <Card key={index} name={item.name} job={item.job} image={item.image} />
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default App