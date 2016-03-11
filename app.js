var SideBar = React.createClass({
    getInitialState() {
        return {
            lists: [
                '123', 
                '456', 
                '789', 
                'abc'
            ]
        };
    },
    onClickTab(index) {
        $('.tab').removeClass('active');
        $('.tab:eq(' + index + ')').addClass('active');
        this.props.changeTab(index);
    }, 
    render() {
        var li = this.state.lists.map((val, i) => {
            var className = i == 0 ? 'active' : '';
            return (
                <li key={i} className={className + ' tab'} onClick={this.onClickTab.bind(this, i)}>
                    <a>{val}</a>
                </li>
            );
        });
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="./">Y.Y.</a>
                        <img id="logo" src="./images/yy.jpg" width="200px"/>
                    </li>
                    {li}
                </ul>
            </div>
        );
    }
});

var Content = React.createClass({
    getInitialState() {
        return {
            content: [
                (<h1>hello world</h1>), 
                (<h1>hello worldDDD</h1>), 
                (<h1>hellooooo world</h1>), 
                (<h1>hellllo worllld</h1>)
            ]
        };
    }, 
    toggleSideBar() {
        $('#wrapper').toggleClass('toggled');
    }, 
    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container" id="main">
                    <span className="glyphicon glyphicon-menu-hamburger" id="toggleSideBar" aria-hidden="true" onClick={this.toggleSideBar}></span>
                    {this.state.content[this.props.tabIndex]}
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState() {
        return {
            tab: 0
        };
    },
    onChangeTab(index) {
        this.setState({
            tab: index
        });
    }, 
    render() {
        return (
            <div id="wrapper">
                <SideBar changeTab={this.onChangeTab} />
                <Content tabIndex={this.state.tab} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />, 
    $('body')[0]
);