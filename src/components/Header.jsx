import React from 'react';

const letters = ["l", "o", "g", "o", "s", "e"];
const menuOptions = ["home","about us", "galery", "contacts"];

function LetterList(props) {
  const letters = props.letters;
  const listItems = letters.map((number, index) =>
    <span key={index} className={"b"+index}>
      {number}
    </span>
  );
  return (
    <a href="index.html" >{listItems}</a>
  );
}

function MenuList(props){
  const menuOptions = props.menuOptions;
  const listOptions = menuOptions.map((option, index) =>
  	<li key={index} className={"scroll_btn"}>
  		<a href={"#"+option}>
  			{option}
  		</a>
  	</li>
  );
  return (
  	<ul>{listOptions}</ul>
  );
}



export default class Header extends React.Component{
  render(){
    return (
			<div>
				<header>
					<div className="menu_block">
						<div className="container clearfix">
							<div className="logo pull-left">
									<LetterList letters={letters} />
							</div>
							<div className="pull-right">
								<nav className="navmenu center">
										<MenuList menuOptions={menuOptions}/>
								</nav>
							</div>
						</div>
					</div>
				</header>
			</div>
    );
  }
}
