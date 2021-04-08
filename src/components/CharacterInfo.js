import React from 'react';
import './CharacterInfo.css'

class CharacterInfo extends React.Component {
    render() {
        return (
            <>
            <div className="character-info-main">
                <div className="charimg-container">
                    <img src="charGranger.png" alt="img" />
                </div>
                <div class="chardesc-container">
                    <div class="cname">
                        <h1>Hermione Granger</h1>
                    </div>
                    <div class="cdesc">
                        <p>
                            Minister Hermione Jean Granger was an English Muggle-born witch born to Mr and Mrs Granger. At the age of eleven, she learned about her magical nature and was accepted into Hogwarts School of Witchcraft and Wizardry. Hermione began attending Hogwarts in 1991 and was Sorted into Gryffindor House. She possessed a brilliant academic mind and
                            proved to be a gifted student in almost every subject that she studied
                        </p>
                    </div>
                </div>
                <div class="char-info">
                    <div class="char-info-heading">
                        <h1>
                            Information
                        </h1>
                
                    </div>
                    <div class="char-info-table">
                        <table >
                    
                            <tr>
                                <th>House</th>
                                <td>Gryffindor</td>
                            </tr>
                            <tr>
                                <th>Born</th>
                                <td>31 July, 1980, Godric's Hollow</td>
                            </tr>
                            <tr>
                                <th>Known as</th>
                                <td>Boy Who Lived,Chosen</td>
                            </tr>
                            <tr>
                                <th>Blood</th>
                                <td>Half-Blood</td>
                            
                            </tr>
                            <tr>
                                <th>Title(s)</th>
                                <td>Triwizard Champion,Seeker,Master Of Death</td>
                            </tr>
                            <tr>
                                <th>Wand</th>
                                <td>11", Holly, phoenix feather</td>
                            </tr>
                            <tr>
                                <th>Boggart</th>
                                <td>Dementor</td>
                            </tr>
                            <tr>
                                <th>Patronus</th>
                                <td>Stag</td>
                            </tr>
                            <tr>
                                <th>Romances</th>
                                <td>Cho Chang ,Ginny Weasley</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default CharacterInfo;