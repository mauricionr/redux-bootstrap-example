import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import repoActions from "../../actions/repo_actions";
import Counter from "../../components/counter_component";

function mapStateToPropsReposPage(state: any) {
    return { repos: state.get("repos") };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(repoActions, dispatch) };
}

@connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)
class ReposPage extends React.Component<any, any> {
    public render() {
        let label = "Loading...";
        if (this.props.repos !== undefined && this.props.repos.get("loading") === false) {
            label = this.props.repos.get("reposCount");
        }
        return (
            <div>
                <h1>Repos Page!</h1>
                <Counter count={label}
                         addBtnTextLabel={"Add Repo"}
                         incrementAsync={() => { this.props.actions.addRepoAsync(); } } />
            </div>
        );
    }
}

export default ReposPage;
