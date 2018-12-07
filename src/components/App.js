import React, { Component } from 'react'
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

export default class App extends Component {
   state = {images: [] }

    onSearchSubmit = async (term) => {
        const res = await unsplash.get(`/search/photos`, {
            params: { query: term },
          
        });
        this.setState({images: res.data.results})
    }
    render() {
    
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <p>Total Images: {this.state.images.length}</p>
                <ImageList images={this.state.images} />
            </div>

        );
    }
}


