import { Island } from '@hubspot/cms-components';
import CardReadMore from '../../islands/CardReadMore.tsx?island';
import { ChoiceField, FieldGroup, ModuleFields, RepeatedFieldGroup, TextField } from '@hubspot/cms-components/fields';
import cardsStyles from '../../../styles/cards.module.css';

export function Component({ fieldValues }) {
    const cards = fieldValues.card;
    const cardsPerRow = fieldValues.settings.cardsPerRow;
    
    let cardsClasses = cardsStyles.cards + ' ' + cardsStyles.cards__one;
    if (cardsPerRow == 'two') {
        cardsClasses = cardsStyles.cards + ' ' + cardsStyles.cards__two;
    } else if (cardsPerRow == 'three') {
        cardsClasses = cardsStyles.cards + ' ' + cardsStyles.cards__three;
    } else if (cardsPerRow == 'four') {
        cardsClasses = cardsStyles.cards + ' ' + cardsStyles.cards__four;
    }

    return (
        <div className={cardsClasses}>
            { cards.map((card) => {
                return (
                    <div className={cardsStyles.card}>
                        <p>{ card.text }</p>
                        <Island module={CardReadMore} defaultExpanded={false} readMoreButton={card.readMoreButton} moreText={card.moreText}></Island>
                    </div>
                )
            })}
        </div>
    )
}

export const fields = (
    <ModuleFields>
        <FieldGroup
            name='settings'
            label='Settings'
        >
            <ChoiceField
                name='cardsPerRow'
                label='Cards per row'
                choices={[
                    ['one', '1'],
                    ['two', '2'],
                    ['three', '3'],
                    ['four', '4']
                ]}
                default='three'
            ></ChoiceField>
        </FieldGroup>
        <RepeatedFieldGroup 
            name='card' 
            label='Card'
            occurrence={{
                min: 1,
                max: null,
                default: 3,
            }}
            default={[
                {
                    text: 'Lorem ipsum dolor sit amet 1',
                    readMoreButton: 'Read more',
                    moreText: 'More text, lorem ipsum dolor sit amet 1',
                },
                {
                    text: 'Lorem ipsum dolor sit amet 2',
                    readMoreButton: 'Read more',
                    moreText: 'More text, lorem ipsum dolor sit amet 2',
                },
                {
                    text: 'Lorem ipsum dolor sit amet 3',
                    readMoreButton: 'Read more',
                    moreText: 'More text, lorem ipsum dolor sit amet 3',
                },
            ]}
        >
            <TextField name='text' label='Text' default='Lorem ipsum dolor sit amet' />
            <TextField name='readMoreButton' label='Read more button' default='Read more' />
            <TextField name='moreText' label='More text' default='More text, lorem ipsum dolor sit amet' />
        </RepeatedFieldGroup>
    </ModuleFields>
)

export const meta = {
    label: 'Cards'
}