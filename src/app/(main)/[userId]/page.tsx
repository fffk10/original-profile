const UserPage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params

  return <div>{userId}</div>
}

export default UserPage
