import * as React from 'react';

export default function(Component: React.FC) {
  return class TriggerRerender extends React.Component<{}, { trigger: boolean }> {
    constructor(props: {}) {
      super(props);

      this.state = {
        trigger: false
      };
    }

    componentDidMount() {
      this.setState({ trigger: true });
    }

    render() {
      const { trigger } = this.state;

      return trigger ? <Component /> : null;
    }
  };
}
