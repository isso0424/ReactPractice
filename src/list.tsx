import React from 'react';

interface ListState{
  contents: Array<string>
}

interface ListValueProps{
  contents: Array<string>
}

function Content(): JSX.Element {
  const [state, setState] = React.useState<ListState>({contents: ["はよ", "課題", "やれ"]});

  function buttonPushEvent(){
    const updatedValue = state.contents
    updatedValue.push("ボケ")
    setState({contents: updatedValue})
  }

  return (
    <>
      <ul>
        <ListValue contents={state.contents}/>
      </ul>
      <button onClick={() =>{buttonPushEvent()}}>やりたくない</button>
    </>
  );
}

function ListValue(props: ListValueProps): JSX.Element {
  return (
    <>
      {
        props.contents.map((str) =>
          <li>{str}</li>
        )
      }
    </>
  )
}

export default Content;
