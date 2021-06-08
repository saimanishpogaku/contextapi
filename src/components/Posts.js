import React, { Component } from 'react';
// import { useCard, cardContext } from '../contexts/cardContext';
import { CardContext } from '../contexts/cardContext';
import '../App.css';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: ''
        }
        console.log(this.context);

    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => this.context.initializeState(res))
            .catch(err => console.log(err));
    }

    editPost(postId, prevData) {
        this.setState({ id: '', title: '', body: '' })
        console.log(postId);
        this.hideItem('postId_', postId);
        this.showItem('postIdedit_', postId);
        this.setState({ id: prevData.id, title: prevData.title, body: prevData.body });
    }

    cancelPost(postId) {

        console.log(postId);
        this.hideItem('postIdedit_', postId);
        this.showItem('postId_', postId);
        this.setState({
            editing: true
        })
    }

    savePost = (e) => {
        e.preventDefault();
        console.log(this)
        this.context.updatePost(this.state.id, this.state);
        this.hideItem('postIdedit_', this.state.id);
        this.showItem('postId_', this.state.id);
    }

    deletePost(postId) {
        this.context.deletePost(postId);
    }

    hideItem(classname, postId) {
        document.getElementById(`${classname}${postId}`).classList.add('hide-element');
    }

    showItem(classname, postId) {
        document.getElementById(`${classname}${postId}`).classList.remove('hide-element');
    }

    handleOnTitle = (e) => {
        console.log(e.target.value);
        this.setState({ title: e.target.value })
    }

    handleOnBody = (e) => {
        console.log(e.target.value);
        this.setState({ body: e.target.value })
    }

    render() {
        const { posts, addPost, updatePost, deletePost, initializeState } = this.context;
        // console.log(this.context); return <h1>Hello</h1>;
        const postItems = posts.map((post) => {

            return (
                <div key={post.id} style={{ width: "90%" }} className="mx-auto">
                    <div id={`postId_${post.id}`} className={`cardview mx-auto`}>
                        <p id={`h2-${post.id}`} style={{ color: "black" }} className={post.id}><b>{post.title}</b></p>
                        <p id={`p1-${post.id}`} className={post.id}>{post.body}</p>
                        <button className={`${post.id}  btn-danger btn`} onClick={() => this.deletePost(post.id)}>delete</button>
                        <button className={`${post.id}  btn-primary btn`} onClick={() => this.editPost(post.id, post)}>edit</button>
                    </div >

                    <div className={`cardview mx-auto hide-element`} id={`postIdedit_${post.id}`}>
                        <form>
                            <div className="form-group">
                                <label htmlFor={`editor-title-${post.id}`}>Title*</label>
                                <input type="text" id={`editor-title-${post.id}`} className="form-control" value={this.state.title} onChange={this.handleOnTitle}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor={`editor-body-${post.id}`}>Desc*</label>
                                <textarea id={`editor-body-${post.id}`} className="form-control" style={{ height: "50px" }} value={post.body} onChange={this.handleOnTitle}></textarea>
                            </div>
                            <button className={`${post.id}  btn-success btn`} onClick={this.savePost}>save</button>
                            <button className={`${post.id}  btn-secondary btn`} onClick={() => this.cancelPost(post.id)}>cancel</button>
                        </form >
                    </div>
                </div >
            )
        });

        return (
            <div className="row" >
                <h1 style={{ textAlign: "center", width: "100%" }}>Posts view</h1>
                { postItems}
            </div >
        )
    }
}


Posts.contextType = CardContext;

export default Posts;
