import Subreddit from "../Subreddit/Subreddit"
import "./Subreddits.css"

const Subreddits = () => {
    return (
        <div className="subreddits-container">
            <span id="subreddits-title">Subreddits</span>
            <div className="subreddits">
             <Subreddit/>
            </div>
        </div>
    )
}

export default Subreddits