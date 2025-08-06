import { Component } from 'react';

import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

import PromoPage from './pages/promoPage/PromoPage';
import ForYourPleasurePage from './pages/forYourPleasurePage/ForYourPleasurePage';
import CardPage from './pages/cardPage/CardPage';
import OurCoffeeProduct from './pages/ourCoffeeProduct/OurCoffeeProduct';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentItem: 1,
      promoPage: {
        pageTitle: "Everything You Love About Coffee",
        pageSubtitle: [
          { name: "We makes every ay full of energy and taste", id: 1 },
          { name: "Want to try our beans?", id: 1 },
        ],
        aboutUs: {
          pageTitle: "About Us",
          key: 1,
          text: [
            {
              p: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
              key: 1,
            },
            {
              p: "Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.",
              key: 2,
            },
            
          ],
        },
      },
      forYourPleasurePage: {
        pageTitle: "For your pleasure",
        sectionAbout: {
          sectionTitle: "About our goods",
          img: {
            name: "coffee.jpg",
            alt: "black photo with steam and white coffee cup",
          },
          text: [
            "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
          ],
        },
      },
      cardPage: {
        pageTitle: "Our Coffee",
        sectionTitle: "About our beans",
        text: [
          {
            p: "Coffee beans are known for their complex and diverse range of flavors and aromas, which can vary greatly depending on their origin, processing method, and roast level.The sweetness of coffee beans can be influenced by factors such as their natural sugars, the soil they are grown in, and the way they are processed after harvest. When it comes to the flavor and aroma of coffee, there is often a delicate balance between sweetness, acidity, bitterness, and other characteristics that give each bean its unique profile.Understanding and appreciating the nuances of coffee flavor can be a rewarding experience for any coffee lover.",
            key: 1,
          },
        ],
        filterSection: {
          captions: {
            text: "Looking for",
            filter: "Or filter",
          },
          placeholder: {
            text: "start Typing here...",
          },
        },
      },

      nav: [
        { name: "Coffee house", path: "#", id: 1 },
        { name: "Our coffee", path: "#", id: 2 },
        { name: "For your pleasure", path: "#", id: 3 },
      ],

      cards: [
        {
          image: "solimo.jpg",
          name: "Solimo Coffee Beans 2 kg",
          price: "10.73£",
          origin: "Columbia",
          best: false,
          key: 1,
          descriptions:
            "Solimo Coffee Beans is a brand of coffee that is sourced from the finest coffee plantations of Colombia, a country renowned for its high-quality coffee. The beans are carefully selected and roasted to perfection to bring out their rich and complex flavors. Solimo Coffee Beans from Colombia have a smooth, medium roast flavor with a subtle nutty and chocolaty taste. They are suitable for making espresso, drip coffee, and French press. Solimo Coffee Beans are a great choice for those who want a premium coffee experience at an affordable price.",
        },
        {
          image: "shmiak.jpg",
          name: "Sshmiak Coffee Beans 0.5 kg",
          price: "28.73£",
          origin: "Kenya",
          best: true,
          key: 2,
          descriptions:
            "One type of coffee bean that is commonly grown in Ghana is the Robusta coffee bean. Robusta coffee beans are known for their strong and earthy flavor, and they contain more caffeine than Arabica beans. The beans grown in Ghana are typically processed using the wet method, which involves removing the outer layers of the fruit before the beans are dried and roasted. The resulting coffee has a bold flavor with notes of chocolate and caramel, and it is often used to make espresso blends or dark roasts. Overall, Ghanaian Robusta coffee beans are a great choice for those who prefer a strong and full-bodied cup of coffee.",
        },
        
        {
          image: "aromistico.jpg",
          name: "Aromistico Coffee 1 kg",
          price: "6.99£",
          origin: "Brazil",
          best: false,
          key: 3,
          descriptions:
            "Brazil is one of the world's largest coffee producers, and its coffee beans are known for their mild and sweet flavor with low acidity. Brazilian coffee beans are often used in blends, but they can also be enjoyed on their own as a medium-bodied cup with notes of chocolate and nuts. The taste and aroma of Brazilian coffee can vary depending on the region and growing conditions, but overall, it is a popular choice for its smooth and balanced flavor profile.",
        },
        {
          image: "aromistico-brazil.jpg",
          name: "Santos Coffee 2 k",
          price: "12.99£",
          origin: "Brazil",
          best: true,
          key: 4,
          descriptions:
            "Brazil is the largest producer of coffee in the world, and its coffee beans are known for their mild, nutty, and chocolatey flavors. Brazilian coffee is typically low in acidity and has a smooth, medium body. The country produces a wide range of coffee varieties, from the well-known Santos to the lesser-known Cerrado and Bourbon. Some of the most popular Brazilian coffee beans come from the Minas Gerais and São Paulo regions. Brazilian coffee is often used in blends with other beans, but single-origin Brazilian coffees can also be enjoyed on their own.",
        },
        {
          image: "presto.jpg",
          name: "Presto Coffee Beans 1 kg",
          price: "15.99£",
          origin: "Kenya",
          best: false,
          key: 5,
          descriptions:
            "Presto Coffee Beans from Kenya are known for their bold and complex flavors. These coffee beans are grown in the high altitude regions of Kenya, which results in a distinctive taste profile that is characterized by bright acidity, citrusy notes, and a subtle sweetness. The beans are medium roasted to bring out their rich flavors and to balance the acidity. The Presto Coffee Beans from Kenya are ideal for those who enjoy a strong, flavorful coffee with a bright and refreshing taste.",
        },
        {
          image: "cappucchino.jpg",
          name: "Braziliano Coffee 3 k",
          price: "15.11£",
          origin: "Columbia",
          best: true,
          key: 6,
          descriptions:
            "Bourbon coffee beans from Brazil are known for their unique and complex flavor profile. They are grown at high altitudes and have a rich, nutty flavor with hints of chocolate and caramel. Bourbon coffee is also known for its bright acidity and smooth, velvety mouthfeel. It is a popular choice among coffee enthusiasts who appreciate a more nuanced and complex flavor in their cup.",
        },
      ],

      term: '',
      filter: '',

    }
  }

  LoadedPage = ({ PromoPage, ForYourPleasurePage, CardPage, visibleData }) => {
    switch (this.state.currentPage) {
      case 1:
        return <PromoPage
          promoPage={this.state.promoPage}
          cards={this.state.cards}
          changePage={this.changePage}
          setCurrentItem={this.setCurrentItem} />;
      case 2:
        return <CardPage
          data={this.state.cardPage}
          cards={visibleData}
          onUpdateSearch={this.onUpdateSearch}
          onFilterSelect={this.onFilterSelect}
          changePage={this.changePage}
          setCurrentItem={this.setCurrentItem}/>;
      case 3:
        return <ForYourPleasurePage
          data={this.state.forYourPleasurePage}
          cards={this.state.cards}
          changePage={this.changePage}
          setCurrentItem={this.setCurrentItem}/>
      case 4: 
        return <OurCoffeeProduct
          pageTitle={this.state.cardPage.pageTitle}
          currentItem={this.state.currentItem}
          cards={this.state.cards}
        />
      default:
    }
  }

  serchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => { 
    this.setState({ term });
  }

  filterPost = (items, filter) => { 
    switch (filter) { 
      case 'Brazil':
        return items.filter(item => item.origin === 'Brazil');
      case 'Kenya':
        return items.filter(item => item.origin === 'Kenya');
      case 'Columbia':
        return items.filter(item => item.origin === 'Columbia');
      case 'All':
        return items;
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => { 
    this.setState({ filter });
  }

  changePage = (pageName, e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({currentPage: pageName})
  }

  setCurrentItem = (id) => {
    this.setState({currentItem: id})
  }

  render() { 
    const {cards, term, filter } = this.state;
    const visibleData = this.filterPost(this.serchEmp(cards, term), filter);
  return (
    <div className="App">
      <div className ="App__navigation">
        <Navigation
                  nav={this.state.nav}
                  change={this.changePage}/>
         </div>
           <main>
          {this.LoadedPage({PromoPage, ForYourPleasurePage, CardPage, visibleData})}
           </main> 
        <Footer
                  nav={this.state.nav}
                  change={this.changePage}
      />
    </div>
  );
}
}

export default App;
