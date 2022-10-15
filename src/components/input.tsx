

const Input = (type,name) => {

    console.log(type);
    
  return (
    <>
    <input type={type.type} name={name.name}  />
    </>
  )
}

export default Input
