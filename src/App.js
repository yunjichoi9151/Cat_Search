import { SearchInput } from './components/SearchInput.js';
import { SearchResult } from './components/SearchResult.js';
import { ImageInfo } from './components/ImageInfo.js';
import { api } from './api/api.js';

export default function App($app) {
  this.state = {
    visible: false,
    image: null,
    data: [],
  }

  const searchInput = new SearchInput({
    $app,
    onSearch: async(keyword) => {
      const searchData = await api.fetchCats(keyword);
      this.setState({
        ...this.state,
        data: searchData.data,
      })
    }
  });

  const searchResult = new SearchResult({
    $app,
    initialData: [],
    onClick: (image) => {
      this.setState({
        visible: true,
        image
      });
    }
  });

  const imageInfo = new ImageInfo({
    $app,
    initialState: {
      visible: false,
      image: null
    }
  });

  this.setState = (nextState) => {
    this.state = nextState;
    searchResult.setState(this.state.data);
    imageInfo.setState({
      image: this.state.image,
      visible: this.state.visible,
    })
  }
}
