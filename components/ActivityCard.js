const ActivityCard = (props) => (
  <div>
    <style jsx>{`
      img {
        max-width: 100%;
      }
      
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        padding: 20px;
        padding-bottom: 0;
      }

      .content-wrapper {
        position: relative;
        border: 1px solid #007800;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
      }

      h3 {
        background: #01770C;
        margin-bottom: 0;
        padding: 15px;
        color: white;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: normal;
        border-radius: 5px 5px 0 0;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
      }

      h3 span {
        text-align: right;
        font-weight: normal;
        float: right;
        font-size: 20px;
      }

      .tag-wrapper {
        background: #01770C;
        position: absolute;
        border-radius: 100px;
        color: white;
        font-size: 24px;
        font-family: sans-serif;
        left: 10px;
        top: 15px;
        opacity: 0;
        animation: badgeAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .content-icon {
        max-width: 100px;
        border-radius: 100px;
        display: inline-block;
        vertical-align: middle;
      }

      .tag-wrapper span {
        padding: 25px 50px 20px 40px;
        display: inline-block;
        vertical-align: middle;
      }

      .clip-thumbnail {
        margin-bottom: -4px;
      }

      .achievment {
        margin-bottom: -4px;
      }

      @keyframes badgeAnimation {
        0% {
            opacity: 0;
            transform: translateY(20px)
        }
        100% {
            opacity: .9;
            transform: translateY(0)
        }
      }
    `}</style>
    <ul>
      <li>
        <h4>Activity Feed</h4>
      </li>
      {props.data.activityItems.map( (activity) => (
        <li>
          <h3>
            {activity.contentTitle}
            <span>{activity.activityItemType}</span>
          </h3>
          <div className="content-wrapper">
            <div className="tag-wrapper">
              <img className="content-icon" src={activity.contentImageUri} />
              <span>{activity.achievementName}</span>
            </div>
            <img className="clip-thumbnail" src={activity.clipThumbnail} />
            <img className="achievment" src={activity.achievementIcon} />
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default ActivityCard