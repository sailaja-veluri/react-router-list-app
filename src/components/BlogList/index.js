// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props
  return (
    <ul className="ul-container">
      {blogList.map(each => (
        <BlogItem key={each.id} blogItemDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
