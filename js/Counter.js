import NumberCounter from 'number-counter';

class Counter extends Component {
    render () {
        return (
            <div class="white">
                <NumberCounter end={6000} delay={5} postFix="+"/>
            </div>
        );
    }
}

export { Counter }