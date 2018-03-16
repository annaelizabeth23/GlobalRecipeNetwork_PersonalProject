import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchUserData } from '../reducer';
import {Route, Redirect} from 'react-router';
import {Link} from 'react-router-dom';

class EditRecipe extends Component {
    constructor() {
        super();
        this.state= {
            thisRecipe: {},
            title: '',
            recipeDesc: '',
            recipeStory: '',
            recipeOrigin: '',
            cookTime: '',
            prepTime: '',
            servings: '',
            ingredients: '',
            directions: ''
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.recipeInfo = this.recipeInfo.bind(this);
        this.getRecipeInfo = this.getRecipeInfo.bind(this);
    }

    componentDidMount () {
        axios.get('/api/user-data').then(response => {
            this.props.fetchUserData(response.data.user);
            this.getRecipeInfo();
        }).catch(error => {
            console.log('error with redux user at edit recipe')
        })
    }

    getRecipeInfo(){
        console.log('get recipe info');
        axios.post('/api/individualRecipe', {recipe_id: this.props.match.params.recipe_id}).then(response => {
          this.setState({thisRecipe: response.data[0]});
          //response.data comes back as an array but you can put it in an object and access as above
        });
        console.log('user', this.props);
      }

    recipeInfo(input, name) {
        let thisRecipe = {...this.state.thisRecipe};
        switch(name) {
            case 'title':
                thisRecipe.title = input.toUpperCase();
                this.setState({thisRecipe})
                break;
            
            default:
                thisRecipe[name] = input;
                this.setState({
                    thisRecipe: thisRecipe
                })
        }
        
    }

    handleEdit(event){
        console.log('handle edit function *****');
        event.preventDefault();
        const body = {...this.state.thisRecipe};
        body.recipe_id = this.props.match.params.recipe_id;
        axios.post('/api/editRecipe', body).then(res => {
            console.log("recipe edited successfully");
        }).catch(console.log("error editing recipe"));
        console.log(this.props);
        this.props.history.push("/recipeedited");
    }

  render() {
      
    return (
          <div className="add-a-recipe-top-level top-level container">
            <h4>Share a Recipe with the Global Recipe Network</h4>
            {/* <p><b>User Submitting Recipe:</b> {this.props.user.name}</p> */}
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Recipe Title</label>
                    <input type="text" className="form-control" name="title" id="recipe-title-input" value={this.state.thisRecipe.title} onChange={(e) => {this.recipeInfo(e.target.value, 'title')}} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Recipe Description</label>
                    <input type="text" className="form-control" name="recipeDesc" id="recipe-description-input" value={this.state.thisRecipe.recipe_desc} onChange={(e) => {this.recipeInfo(e.target.value, 'recipe_desc')}} />
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Does your recipe have a story?</span>
                    </div>
                    <textarea className="form-control" name="recipeStory" aria-label="With textarea" value={this.state.thisRecipe.recipe_story} onChange={(e) => {this.recipeInfo(e.target.value, 'recipe_story')}}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="country-select">Country of Origin:</label>
                    <select className="form-control" name="recipeOrigin" value={this.state.thisRecipe.recipe_origin} onChange={(e) => {this.recipeInfo(e.target.value, 'recipe_origin')}}>
                        <option value="null">{/*intentionally left blank*/}</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua and Deps">Antigua & Deps</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina">Burkina</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Central African Rep">Central African Rep</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Democratic Rep Congo">Congo, Democratic Rep</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Ivory Coast">Ivory Coast</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, North">Korea, North</option>
                        <option value="Korea, South">Korea, South</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar, Burma">Myanmar, Burma</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="St Kitts and Nevis">St Kitts & Nevis</option>
                        <option value="St Lucia">St Lucia</option>
                        <option value="Saint Vincent and the Grenadines">Saint Vincent & the Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome & Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad & Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City">Vatican City</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                </div>
                <div className="add-recipe-sm-input col-lg-6 col-sm-12">
                <div className="form-group">
                    <label htmlFor="cook-time">Cook Time (Minutes):</label>
                    <input className="form-control input-sm" name="cookTime" id="inputsm" type="text" value={this.state.thisRecipe.cook_time} onChange={(e) => {this.recipeInfo(e.target.value, 'cook_time')}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="prep-time">Prep Time (Minutes):</label>
                    <input className="form-control input-sm" name="prepTime" id="inputsm" type="text" value={this.state.thisRecipe.prep_time} onChange={(e) => {this.recipeInfo(e.target.value, 'prep_time')}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="servings">Number of Servings:</label>
                    <input className="form-control input-sm" name="servings" id="inputsm" type="text" value={this.state.thisRecipe.servings} onChange={(e) => {this.recipeInfo(e.target.value, 'servings')}}/>
                </div>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Ingredients (Seperated by Commas):</span>
                    </div>
                    <textarea className="form-control" name="ingredients" aria-label="With textarea" value={this.state.thisRecipe.ingredients} onChange={(e) => {this.recipeInfo(e.target.value, 'ingredients')}}></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Directions:</span>
                    </div>
                    <textarea className="form-control" name="directions" aria-label="With textarea" value={this.state.thisRecipe.directions} onChange={(e) => {this.recipeInfo(e.target.value, 'directions')}}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleEdit}>Done Editing</button>
            </form>
          </div>
    );
  }
}

const mapStateToProps = store => {
    return {
        user: store.user
    };
};

const mapDispatchToProps = {
    fetchUserData: fetchUserData
    }

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedEditRecipe = connector(EditRecipe);

export default connectedEditRecipe;
