import React from 'react';

interface ListState{
  contents: Array<string>
}

interface ListValueProps{
  contents: Array<string>
}

const addValueList: string[] = ["ボケ", "カス", "さっさとやれ", "進捗どうですか"]

function getRandom(maxInt: number): number {
  return Math.floor(Math.random() * Math.floor(maxInt))
}

function Content(): JSX.Element {
  const [state, setState] = React.useState<ListState>({contents: []});

  function buttonPushEvent(){
    const updatedValue: string[] = state.contents
    const valueCount: number = addValueList.length
    const newValue: string = addValueList[getRandom(valueCount)]
    updatedValue.push(newValue)
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
