import Color from './Color';
import '../../stylesheets/ColorList.scss';

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f}) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>색이 없습니다. (색을 추가해 주새요)</p> :
            colors.map(color =>
                <Color key={color.id}
                    {...color}
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)} />
            )  
        }
    </div>;


export default ColorList;
