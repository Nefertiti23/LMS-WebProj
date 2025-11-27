import './AccountInfo.css'
import { useState, useEffect } from 'react';

export default function AccountInfo ({a_user, handleUser}) {
    const [theuser, setUser] = useState(a_user);
    const [emailInput, setEmailInput] = useState(a_user.email);
    const [nameInput, setNameInput] = useState(a_user.name);
    const [formImg, setImg] = useState(a_user.imageURL);

    useEffect(() => {
        handleUser(theuser);
    }, [theuser]);

    useEffect(() => {
    }, [formImg]);

    function resetNameForm () {
        document.getElementById('nameForm').reset();
        document.getElementById('emailAlert').textContent = '';
    }

    function checkIfEndsWithCom(theemail) {
        if(theemail[(theemail.length-1)-3] === '.') {
            return true;
        }
        else {
            return false;
        }
    }

    const updateEmailName = () => {
        var newEmail = document.getElementById('newEmail').value;
        var newName = document.getElementById('newName').value

        if (newEmail !== emailInput) {
            if (newEmail !== '' && checkIfEndsWithCom(newEmail)) {
                setEmailInput(newEmail);
                setUser(prevuser => {return {...prevuser, email: newEmail}});
                alert("Email successfully changed!");
                document.getElementById('emailAlert').textContent = '';
                resetNameForm();
            }
            else {
                document.getElementById('emailAlert').textContent = "Please enter a correct email address";
            }
        }

        if (newName !== '' && newName !== nameInput) {
            setNameInput(newName);
            setUser(prevuser => {return {...prevuser, name: newName}});
            resetNameForm();
        }
    }

    function resetPassForm () {
        document.getElementById('conPassNo').textContent = "";
        document.getElementById('charLen').textContent = "Must be 8 characters long";
        document.getElementById('currentPassAlert').textContent = "";
        document.getElementById('passForm').reset();
    }

    const updatePassword = () => {
        var currentPass = document.getElementById('currentPass').value;

        if (currentPass === theuser.password) {
            var newPass = document.getElementById('newPass').value;
            if (newPass.length >= 8) {
                if (newPass === document.getElementById('confirmNewPass').value) {
                    resetPassForm();
                    setUser(prevuser => {return {...prevuser, password: newPass}});
                    alert("Password sucessfully changed!");
                }
                else {
                    document.getElementById('conPassNo').textContent = "Password does not match";
                }
            }
            else {
                document.getElementById('conPassNo').textContent = "";
                document.getElementById('charLen').textContent = "Password contains less than 8 characters";
            }
        }
        else {
            document.getElementById('currentPassAlert').textContent = "Incorrect password";
        }
    }

    return (
        <>
        <div className="screen">
            <h3 className='font-semibold text-3xl'>Account Details</h3>

            <div className="accountbox">
                <div className="px-10 py-6 border border-slate-200 m-auto rounded-lg shadow-md flex flex-col gap-4 bg-white">
                    <form className="flex flex-col gap-6 my-5" id="nameForm">
                        <h4 className="font-bold">Basic Information</h4>
                        <div className="flex flex-col gap-2">
                            <img id='selectedIMG' src={formImg} className='object-cover border-2 border-slate-700 my-4' onClick={() => document.getElementById('fileInput').click()} alt="Click to upload"></img>
                            <p className='text-sm text-slate-500'>Click avatar to change</p>
                            <input id='fileInput' type='file' accept ="image/jpeg, image/png, image/jpg" className='hidden' onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}></input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-sm">Email Address</label>
                            <input id="newEmail" type='email' className="font-mono text-sm text-slate-600 rounded-md py-2 px-3" defaultValue={emailInput}></input>
                            <p id="emailAlert" className='text-xs text-red-700'></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-sm">Display Name</label>
                            <input id="newName" type='text' className="font-mono text-sm text-slate-600 rounded-md py-2 px-3" defaultValue={nameInput}></input>
                            <p id="nameAlert" className='text-xs text-red-700'></p>
                        </div>

                        <div className='flex flex-row gap-4'>
                            <button type="button" id="changeNameBtn" className="saveBtn" onClick={updateEmailName}>Save Changes</button>
                            <button type="button" id="cancel" className="cancelBtn" onClick={() => resetNameForm()}>Reset</button>
                        </div>
                    </form>
                    <div className='line bg-slate-400'></div>
                    <form className="flex flex-col gap-6 my-5" id="passForm">
                        <h4 className="font-bold">Change Password</h4>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-sm">Current Password</label>
                            <input id="currentPass" type='password' className="font-mono text-sm text-slate-600 rounded-md py-2 px-3"></input>
                            <p id="currentPassAlert" className='text-xs text-red-700'></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-sm">New Password</label>
                            <input id="newPass" type='password' className="font-mono text-sm text-slate-600 rounded-md py-2 px-3"></input>
                            <p id="charLen" className='text-xs text-slate-500'>Must be 8 characters long</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-sm">Confirm New Password</label>
                            <input id="confirmNewPass" type='password' className="font-mono text-sm text-slate-600 rounded-md py-2 px-3"></input>
                            <p className='text-xs text-slate-500' id="conPassNo"></p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <button type="button" id="changePassBtn" className="saveBtn" onClick={updatePassword}>Update Password</button>
                            <button type="button" id="cancel" className="cancelBtn" onClick={() => resetPassForm()}>Reset</button>
                        </div>
                    </form>
                    <div className='line bg-slate-400'></div>
                    <form className="flex flex-col gap-6 my-5">
                        <h4 className="font-bold">Danger Zone</h4>
                        <div className='border border-red-300 px-6 py-4 bg-red-100 rounded-md'>
                            <p className='text-sm text-red-900 font-semibold my-1'> Delete Account</p>
                            <p className='text-sm text-red-900'> Once you delete your account, you cannot undo this action.</p>
                            <button type='button' className='delBtn'>Delete Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}