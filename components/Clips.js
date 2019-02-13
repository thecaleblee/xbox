const Clips = (props) => (
  <div>
    <style jsx>{`
      img {
        max-width: 100%;
      }
      
      ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
      }
      
      li {
        width: 20%;
        grow: 0;
      }
    `}</style>
    <h4>Clips</h4>
    <ul>
      {props.data.map( (clip) => (
        <li>
          <a href={`${clip.gameClipUris[0].uri}`} target={`_blank`}>
            <img src={clip.thumbnails[0].uri} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Clips