import { Brand, CTAs, Connect, Termional } from '../../components/index'
import { Casestudy, Header, Item, ItemSkill, Parnter } from '../../containers/index'

const Home = () => {
     return (
          <div className='App'>
               <Header />
               <Brand />
               <Termional />
               <Item />
               <Casestudy />
               <ItemSkill />
               <Parnter />
               <CTAs />
               <Connect />
          </div>
     )
}

export default Home
