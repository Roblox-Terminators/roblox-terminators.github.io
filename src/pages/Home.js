import React from 'react';
import 'bulma/css/bulma.min.css';
import '../animations/Wave.css'

function Home() {
  return (
    <div>
    <section class="hero">
      <div class="hero-body">
        <p class="title">Roblox Terminators</p>
        <p class="subtitle">Where we try to make Roblox a safer place.</p>
      </div>
    </section>

    <section class="section is-medium">
      <div class="has-text-centered">
        <ScaleButton className="has-background-primary-20" from={2.35} to={2.5}>
          Report now!
        </ScaleButton>
      </div>
    </section>


    <section class="section">
    <div class="box has-background-info-10 is-shadowless">
      <h1 class="title is-4" >Who Are you?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus imperdiet imperdiet. Morbi tellus eros, porta eu ipsum in, pulvinar ultrices odio. Duis quis malesuada augue. Nam vulputate maximus velit id vehicula. Ut vehicula tortor sit amet eros semper rutrum. Donec gravida quam dui, interdum ornare dui cursus ut. Suspendisse quis mauris id erat gravida sollicitudin. Etiam ac aliquam sapien, vel lacinia eros. In euismod efficitur tempor. Praesent vitae ultricies nibh, varius blandit sapien. Aliquam tempus augue eget turpis suscipit, dapibus mattis felis auctor. Praesent dictum sodales massa, eu placerat lorem accumsan eu. Pellentesque vel porta leo. 
      </p>
    </div>
    <div class="box has-background-info-10 is-shadowless">
      <h1 class="title is-4" >How does it work?</h1>
      <p>
        Nullam pretium ultrices diam at consequat. Ut aliquam felis et lectus scelerisque, vitae placerat erat dignissim. Sed maximus quam leo. Nunc iaculis venenatis feugiat. Donec cursus faucibus orci, a tincidunt erat. Curabitur sed massa elit. Donec non turpis nec odio rutrum vulputate. 
      </p>
    </div>
    <div class="box has-background-info-10 is-shadowless">
      <h1 class="title is-4" >I want to help!</h1>
      <p>
        Quisque tincidunt enim et sagittis fermentum. Sed sit amet metus congue magna congue congue non vitae mi. Aenean malesuada facilisis mauris, eget mattis leo faucibus sodales. Morbi quam justo, tempus vel lorem quis, viverra faucibus quam. Aenean placerat efficitur urna eget dapibus. Donec lacinia nunc in eleifend finibus. Donec pulvinar molestie lobortis. Integer placerat eros at elementum pulvinar. Aenean sit amet accumsan libero. Donec a tempus leo, vitae consectetur arcu. 
      </p>
       </div>
    </section>
    </div>
  );
}


class ScaleButton extends React.Component {
    state = { isHovered: false};

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { isHovered } = this.state;
    const { className, from, to } = this.props;

    const buttonStyles = {
      transform: isHovered ? `scale(${to})` : `scale(${from})`,
      transition: 'transform 0.2s ease'
    };

    return (
      <button
        className={`button ${className}`}
        style={buttonStyles}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Home;