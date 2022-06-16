import React, { Component } from 'react';
import { CardList } from './conponents/card/card-list'
import { SearchBox } from './conponents/search-box/search-box.components';

import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: '0',
          username: 'frank',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'Shine',
          id: '1',
          username: 'star',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@sit',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'lover boy',
          id: '2',
          username: 'love',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'goege',
          id: '3',
          username: 'frank',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'issac newton',
          id: '4',
          username: 'frank',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'mosesss',
          id: '5',
          username: 'mos',
          address: {
            suite: '196',
            city: 'nigr',
            geo: 'capit',
            zipcode: '234',
            street: 'mina'
          }, 
          phone: '0202082',
          website: '@sitte',
          company: {
            name: 'ibss',
            bs: 'sdcy',
          },
        },

        {
          name: 'fine boy',
          id: '6',
          username: 'fine',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'baser',
          id: '7',
          username: 'bas',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'shakers',
          id: '8',
          username: 'shake',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'flower',
          id: '9',
          username: 'flow',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        },

        {
          name: 'loader',
          id: '10',
          username: 'load',
          address: {
            suite: '198',
            city: 'niger',
            geo: 'local',
            zipcode: '234',
            street: 'minna'
          }, 
          phone: '020202',
          website: '@site',
          company: {
            name: 'ibress',
            bs: 'sdcr',
          },
        }
        
        
      ],
      searchField: ''
    };
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Yongzy Card Design</h1>
        <SearchBox placeholder= 'search pictures' handleChange= { e => this.setState({searchField: e.target.value})}/>
        <CardList monsters = {filteredMonsters}/>

        
      </div>
    );
  }
}

export default App;
