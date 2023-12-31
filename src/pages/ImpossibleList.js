import Footer from "./HomeComponents/Footer"
import NavigationBar from "./HomeComponents/NavigationBar"
import Particless from "./HomeComponents/homepagecompo/Particles"
import ImpossibleItems from "./ilcompo/ImpossibleItems"
import './impossiblelist.css'

const ImpossibleList = () => {
  return (
    <div className="il">
      <NavigationBar anotherPage={true}/>
      <div className="il__header">- Impossible List -</div>
      <ImpossibleItems/>
      <Footer anotherPage={true}/>
    </div>
  )
}

export default ImpossibleList