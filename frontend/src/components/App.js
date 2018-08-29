import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as api from '../utils/api'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class App extends Component {
    state = {
      Categories: [],
  };

  componentDidMount() {
      api.getAllCategories().then(Categories => {
          this.setState({ Categories });
      });
  }
  
  render() {
    const { posts } = this.props
    console.log('this.props', this.props)
    return (
      <div >
      <List component="nav">
        {this.state.Categories.map(
            categorie => (
              <ListItem button key={categorie.name}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary={categorie.name} />
              </ListItem>
            ))
          }
      </List>
    </div>
    );
  }
}



export default App;
