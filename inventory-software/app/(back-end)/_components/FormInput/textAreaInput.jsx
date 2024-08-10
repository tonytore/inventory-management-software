"use client";
export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  className = "sm:col-span-2 ",

}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 dark:text-slate-50 text-slate-500-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2 ">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block dark:bg-slate-800 bg-slate-50 dark:text-slate-50 text-slate-500 w-full rounded-md border-0 py-1.5
           text-gray-90 items-center shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-50
             focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
          defaultValue={""}
          placeholder={`Type the ${label.toLowerCase()}`}
          
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}