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
import { connect } from 'react-redux';
import { addPost, fetchCategories } from '../actions'



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class App extends Component {
  state = {
    Categories: null,
  }

  componentDidMount() {
    this.props.getAllCategories(this.state.Categories)
    // api.getCategories().then(Categories => {
    //   this.setState({ Categories })
    // })
  }

  doThing = () => {
   // this.props.dispatch(addPost({}))
   this.props.createPost({})
  }

  render() {
    //const { posts } = this.props
    console.log('Props 1', this.props)
    console.log('this.state', this.state)
    return (
      <div >
      <List component="nav">
        {this.props.categories.map(
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


function mapStateToProps ({posts, comments, categories}) {
  console.log('Posts', posts)
  console.log('Comments', comments)
  console.log('Categories', categories)
  return {
    categories
    // posts: posts.posts.map((post) => ({
    //   title:  'teste',
    // }))
  }
}

function mapDispatchToProps(dispatch){
  return{
    createPost: (data) => dispatch(addPost(data)),
    getAllCategories: () => dispatch(fetchCategories())
    //deletePost: (data) => dispatch(removePost(data.id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
