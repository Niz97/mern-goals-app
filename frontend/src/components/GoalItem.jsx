function GoalItem({goal}) {
  return (
   <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleTimeString('en-gb')}
      </div>
      <h2>{goal.text}</h2>
   </div>
  )
}

export default GoalItem