import classes from "./bloggers.module.css";
import React from "react";
import BloggersList from "../../components/Bloggers/BloggersList";
import BloggerDetail from "../../components/Bloggers/Blogger/BloggerDetail";
import NewBlogger from "../../components/Bloggers/Blogger/newBlogger";
import SearchBar from "../../components/searchBar/searchBar";

class Bloggers extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    bloggers: [
      {
        id: "1",
        name: "Juan Perez",
        website: "juanperez.io",
        picture_url: "https://placekitten.com/200/300",
        email: "conact@juanperez.io",
        friends: [],
      },
      {
        id: "2",
        name: "Amano Pikamee",
        website: "pikamee.io",
        picture_url: "https://placekitten.com/200/300",
        email: "contact@pikamee.io",
        friends: ["1"],
      },
      {
        id: "3",
        name: "Tony Stark",
        website: "tonystark.io",
        picture_url: "https://placekitten.com/200/300",
        email: "contact@tonystark.io",
        friends: ["1", "2"],
      },
    ],
    filteredBloggers: [],
    showBloggerDetail: false,
    showNewBlogger: false,
    selectedId: 0,
  };

  componentDidMount() {
    this.setState({ filteredBloggers: this.state.bloggers });
  }

  showBloggerDetail = () => {
    this.setState({ showBloggerDetail: true });
  };

  hideBloggerDetail = () => {
    this.setState({ showBloggerDetail: false });
  };

  showNewBloggerHandler = () => {
    this.setState({ showNewBlogger: true });
  };

  hideNewBloggerHandler = () => {
    this.setState({ showNewBlogger: false });
  };

  setBloggerId = (id) => {
    this.setState({ selectedId: id });
  };

  addFriend = (bloggerId, friend) => {
    const bloggerIndex = this.state.bloggers.findIndex((p) => {
      return p.id === bloggerId;
    });

    const blogger = {
      ...this.state.bloggers[bloggerIndex],
    };

    blogger.friends.push(friend);

    const bloggers = [...this.state.bloggers];
    bloggers[bloggerIndex] = blogger;

    this.setState({ bloggers: bloggers });
  };

  newBloggerHandler = (blogger) => {
    const bloggerList = [...this.state.bloggers];
    bloggerList.push(blogger);

    this.setState({ bloggers: bloggerList,filteredBloggers: bloggerList  });

  };

  filterListHandler = (type, word) => {
    if (word === "") {
      this.setState({ filteredBloggers: this.state.bloggers });
      return;
    }

    if (type === "name") {
      const bloggers = this.state.bloggers;

      const filtered = bloggers.filter((item) => item.name.includes(word));

      this.setState({ filteredBloggers: filtered });
    } else {
      const bloggers = this.state.bloggers;

      const filtered = bloggers.filter((item) => item.website.includes(word));

      this.setState({ filteredBloggers: filtered });
    }
  };

  render() {
    return (
      <div className={classes.main}>
        <SearchBar className={classes.searchBar} onSearch={this.filterListHandler} />
        {this.state.showBloggerDetail && (
          <BloggerDetail
            onHide={this.hideBloggerDetail}
            id={this.state.selectedId}
            bloggers={this.state.bloggers}
            onAddFriend={this.addFriend}
          />
        )}
        {this.state.showNewBlogger && (
          <NewBlogger
            onHide={this.hideNewBloggerHandler}
            id={this.state.bloggers.length + 1}
            addBlogger={this.newBloggerHandler}
          />
        )}

        <BloggersList
          bloggers={this.state.filteredBloggers}
          onShow={this.showBloggerDetail}
          onSelectBlogger={this.setBloggerId}
        />
        <button onClick={this.showNewBloggerHandler} className={classes.Button}>
          Add New Blogger
        </button>
      </div>
    );
  }
}

export default Bloggers;
