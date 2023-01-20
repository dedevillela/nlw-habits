interface HabitProps {
  completed: number
}

export function Habit(props:HabitProps) {
  return (
    <div className="bg-zinc-900 w-10 h-10 text-white rounded-lg m-2 text-center flex justify-center items-center cursor-pointer transition-all ease-in-out delay-250 hover:opacity-75">
      {props.completed}
    </div>
  )
}