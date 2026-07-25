"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

interface ToastProps {
  show: boolean;
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export default function CustomToast({
  show,
  message,
  type = "success",
  onClose,
}: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 max-w-md w-full px-4"
        >
          <div
            className={`p-4 rounded-2xl border shadow-xl backdrop-blur-xl flex items-center gap-3 ${
              type === "success"
                ? "bg-slate-900/90 text-emerald-300 border-emerald-500/30 shadow-emerald-500/10"
                : "bg-slate-900/90 text-rose-300 border-rose-500/30 shadow-rose-500/10"
            }`}
          >
            {type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
            )}
            <p className="text-xs sm:text-sm font-medium text-slate-100 flex-1">
              {message}
            </p>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
