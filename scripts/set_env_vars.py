#!/usr/bin/env python3

import os
import subprocess

def get_env_vars_blob():
    if os.path.exists(".env"):
        return open(".env", "r").read()

    env_vars_blob = os.environ.get("PROD_ENV_VARS")
    if env_vars_blob:
        return env_vars_blob

    raise Exception("No .env file or PROD_ENV_VARS env var found")

def get_env_vars():
    env_vars_blob = get_env_vars_blob()
    for env_var in env_vars_blob.splitlines():
        if not env_var:
            continue
        assgin_index = env_var.find("=")
        key = env_var[:assgin_index]
        value = env_var[assgin_index + 1:]
        for char in ['"', "'"]:
            key = key.strip()
            key = key.strip(char)
            value = value.strip()
            value = value.strip(char)
        yield key, value

def set_env_varr(key, value):
    cmd = f"echo {value} | npx wrangler secret put {key}"
    subprocess.run(cmd, shell=True)

def main():
    for key, value in get_env_vars():
        set_env_varr(key, value)

if __name__ == "__main__":
    SystemExit(main())